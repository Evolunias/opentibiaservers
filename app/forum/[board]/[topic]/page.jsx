import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteModeTabs from '@/app/components/SiteModeTabs';
import { getTopicBySlugs } from '@/lib/forum-data';
import { buildAbsoluteUrl } from '@/lib/seo';

export const revalidate = 30;

export async function generateMetadata({ params }) {
  const { board, topic } = await getTopicBySlugs(params.board, params.topic);
  if (!topic) return { title: 'Topic not found' };
  return {
    title: `${topic.title} — ${board?.name || 'Forum'}`,
    description: String(topic.body || topic.title || '').slice(0, 158),
    alternates: { canonical: buildAbsoluteUrl(`/forum/${params.board}/${params.topic}`) },
  };
}

function formatWhen(value) {
  if (!value) return '';
  try { return new Date(value).toLocaleString(); } catch { return ''; }
}

export default async function ForumTopicPage({ params }) {
  const { board, topic, posts, error } = await getTopicBySlugs(params.board, params.topic);
  if (!board || !topic) notFound();

  return (
    <main className="directory-shell min-h-screen">
      <div className="directory-shell__glow" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-12">
        <SiteModeTabs />
        <div className="forum-topic-page mt-6">
          <div className="forum-board-page__crumb">
            <Link href="/">Forum</Link>
            <span>/</span>
            <Link href={`/forum/${board.slug}`}>{board.name}</Link>
            <span>/</span>
            <span>{topic.title}</span>
          </div>
          <header className="forum-topic-page__head">
            <h1>{topic.title}</h1>
            <p>Started by {topic.author_name || 'Member'} - {formatWhen(topic.created_at)} - {Number(topic.reply_count || 0)} replies</p>
          </header>
          {error ? <div className="forum-alert">{error}</div> : null}
          <div className="forum-posts">
            {!posts.length && topic.body ? (
              <article className="forum-post">
                <div className="forum-post__meta"><strong>{topic.author_name || 'Member'}</strong> - Original post - {formatWhen(topic.created_at)}</div>
                <div className="forum-post__body">{topic.body}</div>
              </article>
            ) : null}
            {posts.map((post, index) => (
              <article key={post.id} className="forum-post">
                <div className="forum-post__meta"><strong>{post.author_name || 'Member'}</strong> - #{index + 1} - {formatWhen(post.created_at)}</div>
                <div className="forum-post__body">{post.body}</div>
              </article>
            ))}
            {!posts.length && !topic.body ? (
              <div className="forum-empty"><p>No posts in this thread yet.</p></div>
            ) : null}
          </div>
          <div className="forum-topic-page__actions">
            <Link href={`/forum/${board.slug}`} className="auth-btn auth-btn--signin">Back to board</Link>
            <Link href={`/forum/${board.slug}/new`} className="auth-btn auth-btn--register">New thread</Link>
          </div>
        </div>
      </div>
    </main>
  );
}