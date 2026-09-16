import Link from 'next/link';
import RankingsClient from './RankingsClient';

export const metadata = {
  title: 'Server Rankings | OpenTibiaServers',
  description: 'Daily vote leaders, top-rated Open Tibia servers, and peak player rankings.',
  alternates: { canonical: '/rankings' },
};

export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="ambient-field" aria-hidden="true" />
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2">OpenTibiaServers.com</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Server rankings</h1>
          <p className="text-base text-slate-300 max-w-3xl">
            Leaders by signed-in daily votes, player ratings, and highest recorded player counts.
            Cast a vote from any live server page once per day.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/" className="btn-ghost">Browse directory</Link>
            <Link href="/submit-server" className="btn-primary">Submit a server</Link>
          </div>
        </div>
      </section>
      <RankingsClient />
    </main>
  );
}
