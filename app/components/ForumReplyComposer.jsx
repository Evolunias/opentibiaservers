'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { supabase } from '@/lib/supabase';

const DRAFT_KEY = 'ots_pending_forum_reply';

function readDraft() {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeDraft(payload) {
  try {
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify(payload));
  } catch {
    /* ignore */
  }
}

function clearDraft() {
  try {
    sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    /* ignore */
  }
}

function openAuth(mode = 'login') {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('ots:open-auth', { detail: { mode } }));
}

export default function ForumReplyComposer({
  boardSlug,
  topicSlug,
  topicId,
  locked = false,
}) {
  const router = useRouter();
  const { user, profile, loading } = useAuth();
  const [body, setBody] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const autoPostedRef = useRef(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    const draft = readDraft();
    if (!draft) return;
    if (draft.board !== boardSlug || draft.topic !== topicSlug) return;
    if (typeof draft.body === 'string' && draft.body) {
      setBody(draft.body);
      setNotice('Draft restored. Sign in to publish, or keep editing.');
    }
  }, [boardSlug, topicSlug]);

  const resolveAuthorName = useCallback(() => {
    return (
      profile?.username ||
      profile?.display_name ||
      user?.user_metadata?.username ||
      (user?.email ? String(user.email).split('@')[0] : '') ||
      'Member'
    );
  }, [profile, user]);

  const postReply = useCallback(
    async (text) => {
      const trimmed = String(text || '').trim();
      if (!trimmed) {
        setError('Write a reply before posting.');
        return false;
      }
      if (!user) {
        setError('Sign in required.');
        return false;
      }
      if (!topicId) {
        setError('Missing topic id.');
        return false;
      }

      setBusy(true);
      setError('');
      setNotice('');

      try {
        const authorName = resolveAuthorName();
        const row = {
          topic_id: topicId,
          user_id: user.id,
          body: trimmed,
          status: 'published',
          author_name: authorName,
        };

        let { error: insertError } = await supabase.from('forum_posts').insert(row);

        if (insertError && /author_name/i.test(insertError.message || '')) {
          const { author_name: _drop, ...withoutAuthor } = row;
          const retry = await supabase.from('forum_posts').insert(withoutAuthor);
          insertError = retry.error;
        }

        if (insertError) throw insertError;

        await supabase
          .from('forum_topics')
          .update({
            last_post_at: new Date().toISOString(),
            last_post_user_id: user.id,
          })
          .eq('id', topicId);

        clearDraft();
        setBody('');
        setNotice('Reply published.');
        router.refresh();
        return true;
      } catch (err) {
        setError(err?.message || 'Could not publish reply.');
        return false;
      } finally {
        setBusy(false);
      }
    },
    [topicId, user, resolveAuthorName, router]
  );

  useEffect(() => {
    if (loading || !user || locked) return;
    if (autoPostedRef.current) return;
    const draft = readDraft();
    if (!draft) return;
    if (draft.board !== boardSlug || draft.topic !== topicSlug) return;
    const draftBody = typeof draft.body === 'string' ? draft.body.trim() : '';
    if (!draftBody) return;

    autoPostedRef.current = true;
    setBody(draftBody);
    setNotice('Signed in - publishing your saved reply...');
    (async () => {
      const ok = await postReply(draftBody);
      if (!ok) autoPostedRef.current = false;
    })();
  }, [loading, user, locked, boardSlug, topicSlug, postReply]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const trimmed = body.trim();
    if (!trimmed) {
      setError('Write a reply before posting.');
      return;
    }
    if (locked) {
      setError('This topic is locked.');
      return;
    }

    if (!user) {
      writeDraft({
        board: boardSlug,
        topic: topicSlug,
        body: trimmed,
        ts: Date.now(),
      });
      setNotice('Draft saved. Sign in to publish your reply.');
      openAuth('login');
      textareaRef.current?.focus();
      return;
    }

    await postReply(trimmed);
  };

  if (locked) {
    return (
      <div className="forum-reply forum-reply--locked">
        <p>This topic is locked. New replies are disabled.</p>
      </div>
    );
  }

  return (
    <section className="forum-reply" aria-label="Reply to topic">
      <div className="forum-reply__head">
        <h2>Post a reply</h2>
        {!loading && !user ? (
          <p className="forum-reply__hint">
            Guests can write a draft. Sign in is required to publish.{' '}
            <button
              type="button"
              className="forum-reply__linkbtn"
              onClick={() => openAuth('login')}
            >
              Sign in
            </button>
          </p>
        ) : (
          <p className="forum-reply__hint">
            Posting as <strong>{resolveAuthorName()}</strong>
          </p>
        )}
      </div>

      <form className="forum-reply__form" onSubmit={onSubmit}>
        <label className="forum-reply__label" htmlFor="forum-reply-body">
          Your reply
        </label>
        <textarea
          id="forum-reply-body"
          ref={textareaRef}
          className="forum-reply__textarea"
          rows={8}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Share details, logs, versions, or questions for the community."
          maxLength={20000}
        />

        {error ? (
          <div className="forum-alert forum-reply__alert" role="alert">
            {error}
          </div>
        ) : null}
        {notice ? <div className="forum-reply__notice">{notice}</div> : null}

        <div className="forum-reply__actions">
          <button
            type="submit"
            className="auth-btn auth-btn--register"
            disabled={busy || !body.trim()}
          >
            {busy ? 'Publishing...' : user ? 'Post reply' : 'Sign in to post'}
          </button>
        </div>
      </form>
    </section>
  );
}


