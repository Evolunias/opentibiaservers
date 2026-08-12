'use client';

import Link from 'next/link';
import { getServerPath } from '@/lib/server-paths';

const statusClass = (server) => (server.is_online ? 'text-emerald-300' : 'text-red-300');

function formatPercent(value) {
  if (value === null || value === undefined) return '-';
  return `${Number(value).toFixed(Number(value) % 1 === 0 ? 0 : 2)}%`;
}

function formatNumber(value) {
  if (value === null || value === undefined) return '-';
  return Number(value).toLocaleString();
}

function formatStars(value) {
  const count = Math.max(3, Math.min(5, Math.round(Number(value || 0))));
  return `${'★'.repeat(count)}${'☆'.repeat(5 - count)}`;
}

export default function ServerList({ servers }) {
  return (
    <div className="server-table-wrap overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="text-left px-4 py-3 font-semibold text-slate-200">Server</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Players</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Peak</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Rating</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Client</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">EXP</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Uptime</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-200">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr className="server-list__featured-row">
            <td colSpan={8} className="px-4 py-3">
              <div className="server-list__featured-content">
                <div>
                  <span className="server-list__featured-label">Featured #1</span>
                  <Link href="/evomanias" className="server-list__featured-name">Evomanias.com</Link>
                  <span className="server-list__featured-copy">Featured Open Tibia server profile</span>
                </div>
                <a
                  href="https://evomanias.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="server-list__featured-action"
                >
                  Visit official site
                </a>
              </div>
            </td>
          </tr>
          {servers.map((server) => (
            <tr key={server.id} className="border-b border-white/10 transition hover:bg-white/10">
              <td className="px-4 py-3 min-w-64">
                <Link href={getServerPath(server)} className="hover:opacity-75 transition-opacity">
                  <div className="font-semibold text-white">{server.name}</div>
                  <div className="text-xs text-slate-400">{server.host || server.ip}:{server.port || 7171}</div>
                </Link>
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`font-bold ${statusClass(server)}`}>
                  {formatNumber(server.players_online || 0)}
                </span>
                <span className="text-slate-500"> / {formatNumber(server.max_players)}</span>
              </td>
              <td className="px-4 py-3 text-center font-semibold text-slate-200">
                {formatNumber(server.players_peak || 0)}
              </td>
              <td className="px-4 py-3 text-center">
                <div className="font-semibold text-slate-200">{formatStars(server.average_rating)} {Number(server.average_rating || 0).toFixed(1)} / 5</div>
                <div className="text-xs text-slate-500">{server.review_count || 0} reviews</div>
              </td>
              <td className="px-4 py-3 text-center font-semibold text-slate-200">
                {server.version || '-'}
              </td>
              <td className="px-4 py-3 text-center text-slate-300">
                <span className="font-semibold">{server.exp_rate || 1}x</span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className="font-semibold text-slate-200">{formatPercent(server.uptime_percent)}</span>
              </td>
              <td className="px-4 py-3 text-slate-300">
                <div>{server.location || '-'}</div>
                <div className="text-xs text-slate-500">{server.world_type || '-'}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
