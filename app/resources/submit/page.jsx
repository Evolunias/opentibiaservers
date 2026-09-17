'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { supabase } from '@/lib/supabase';

const CATEGORIES = [
  { id: 'engine', label: 'Server engine' },
  { id: 'client', label: 'Client' },
  { id: 'map', label: 'Map / OTBM' },
  { id: 'datapack', label: 'Datapack' },
  { id: 'monsters', label: 'Monsters / NPCs / raids' },
  { id: 'tool', label: 'Tool / editor' },
  { id: 'other', label: 'Other' },
];

const empty = {
  category: 'map',
  title: '',
  summary: '',
  github_url: '',
  release_url: '',
  license: 'GPL-2.0',
  engine_compat: '',
  client_compat: '',
  preview_urls: '',
  has_binary: false,
  file_name: '',
  file_version: '',
  sha256: '',
  virustotal_url: '',
  submitter_email: '',
  submitter_name: '',
  notes: '',
};

export default function SubmitResourcePage() {
  const { user } = useAuth();
  const [form, setForm] = useState(empty);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const binaryRequired = useMemo(() => {
    if (form.has_binary) return true;
    return /\.(exe|dll|msi|zip|rar|7z|gz|tgz|tar)(\?|#|$)/i.test(form.release_url || '');
  }, [form.has_binary, form.release_url]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    setDone(null);
    try {
      let token = '';
      try {
        const { data } = await supabase.auth.getSession();
        token = data?.session?.access_token || '';
      } catch {
        /* guest ok */
      }

      const payload = {
        ...form,
        has_binary: binaryRequired,
        preview_urls: form.preview_urls,
        submitter_email: form.submitter_email || user?.email || '',
        submitter_name: form.submitter_name || '',
      };

      const res = await fetch('/api/resources/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.success === false) {
        throw new Error(data?.error || 'Submission failed.');
      }
      setDone(data.submission || { status: 'pending' });
      setForm(empty);
    } catch (err) {
      setError(err?.message || 'Submission failed.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="directory-shell min-h-screen">
      <div className="directory-shell__glow" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-8 pb-16">
        <p className="text-sm opacity-70 mb-2">
          <Link href="/">Forum</Link>
          <span> / </span>
          <Link href="/resources">Resources</Link>
          <span> / </span>
          <span>Submit</span>
        </p>
        <h1 className="text-3xl font-extrabold mb-2">Submit an OT resource</h1>
        <p className="mb-6 opacity-90">
          GitHub/GitLab repos only. Do not paste OTLand threads or rehost their attachments.
          Any binary/zip needs SHA-256 + a VirusTotal file URL for that hash.
        </p>

        {error ? (
          <div className="mb-4 rounded-lg border border-red-400/40 bg-red-500/10 p-3 text-sm" role="alert">
            {error}
          </div>
        ) : null}
        {done ? (
          <div className="mb-4 rounded-lg border border-emerald-400/40 bg-emerald-500/10 p-3 text-sm">
            Submitted for review ({done.status}). We will list approved resources on{' '}
            <Link href="/resources" className="underline">
              /resources
            </Link>
            .
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-white/10 bg-black/20 p-6">
          <label className="block text-sm">
            <span className="font-semibold">Category</span>
            <select
              name="category"
              value={form.category}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
            >
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            <span className="font-semibold">Title</span>
            <input
              name="title"
              value={form.title}
              onChange={onChange}
              required
              maxLength={140}
              placeholder="e.g. Desert siege OTBM for Canary 15.x"
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            <span className="font-semibold">Summary</span>
            <textarea
              name="summary"
              value={form.summary}
              onChange={onChange}
              required
              rows={4}
              maxLength={2000}
              placeholder="What it is, who it is for, install notes."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            <span className="font-semibold">GitHub / GitLab URL</span>
            <input
              name="github_url"
              type="url"
              value={form.github_url}
              onChange={onChange}
              required
              placeholder="https://github.com/org/repo"
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            <span className="font-semibold">Release / download URL (optional)</span>
            <input
              name="release_url"
              type="url"
              value={form.release_url}
              onChange={onChange}
              placeholder="https://github.com/org/repo/releases/tag/v1.0.0"
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-semibold">License</span>
              <input
                name="license"
                value={form.license}
                onChange={onChange}
                required
                placeholder="GPL-2.0 / MIT / ..."
                className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold">Engine compatibility</span>
              <input
                name="engine_compat"
                value={form.engine_compat}
                onChange={onChange}
                placeholder="TFS 1.4 / Canary 15.x"
                className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
              />
            </label>
          </div>

          <label className="block text-sm">
            <span className="font-semibold">Client compatibility</span>
            <input
              name="client_compat"
              value={form.client_compat}
              onChange={onChange}
              placeholder="OTClient Redemption / 13.x"
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            <span className="font-semibold">Preview image URLs (one per line)</span>
            <textarea
              name="preview_urls"
              value={form.preview_urls}
              onChange={onChange}
              rows={3}
              placeholder="https://..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
            />
          </label>

          <label className="flex items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              name="has_binary"
              checked={form.has_binary}
              onChange={onChange}
            />
            This submission includes a binary or archive (exe/zip/rar/7z)
          </label>

          {binaryRequired ? (
            <div className="space-y-3 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4">
              <p className="text-sm">
                VirusTotal is required. Hash the exact file, scan it, then paste the GUI file URL.
              </p>
              <label className="block text-sm">
                <span className="font-semibold">File name</span>
                <input
                  name="file_name"
                  value={form.file_name}
                  onChange={onChange}
                  required={binaryRequired}
                  placeholder="my-map-v1.zip"
                  className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold">File version</span>
                <input
                  name="file_version"
                  value={form.file_version}
                  onChange={onChange}
                  required={binaryRequired}
                  placeholder="1.0.0"
                  className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold">SHA-256</span>
                <input
                  name="sha256"
                  value={form.sha256}
                  onChange={onChange}
                  required={binaryRequired}
                  placeholder="64 hex characters"
                  className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 font-mono text-xs"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold">VirusTotal file URL</span>
                <input
                  name="virustotal_url"
                  type="url"
                  value={form.virustotal_url}
                  onChange={onChange}
                  required={binaryRequired}
                  placeholder="https://www.virustotal.com/gui/file/<sha256>"
                  className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
                />
              </label>
            </div>
          ) : null}

          {!user ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-semibold">Your name (optional)</span>
                <input
                  name="submitter_name"
                  value={form.submitter_name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold">Contact email (optional)</span>
                <input
                  name="submitter_email"
                  type="email"
                  value={form.submitter_email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
                />
              </label>
            </div>
          ) : (
            <p className="text-sm opacity-70">Submitting as {user.email}</p>
          )}

          <label className="block text-sm">
            <span className="font-semibold">Notes for reviewers (optional)</span>
            <textarea
              name="notes"
              value={form.notes}
              onChange={onChange}
              rows={3}
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2"
            />
          </label>

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-emerald-500 px-4 py-3 font-bold text-black disabled:opacity-60"
          >
            {busy ? 'Submitting...' : 'Submit resource for review'}
          </button>
        </form>
      </div>
    </main>
  );
}