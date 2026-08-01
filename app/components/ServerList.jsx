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

function lastSeen(server) {
  const value = server.last_seen_at || server.last_check || server.updated_at;
  if (!value) return '-';
  return new Date(value).toLocaleDateString();
}

export default function ServerList({ servers }) {
  return (
    <div className="server-table-wrap overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="text-left px-4 py-3 font-semibold text-slate-200">Rank</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-200">Server</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-200">Source</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Players</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Peak</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Points</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Rating</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Client</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">EXP</th>
            <th className="text-center px-4 py-3 font-semibold text-slate-200">Uptime</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-200">Location</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-200">Seen</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server) => (
            <tr key={server.id} className="border-b border-white/10 transition hover:bg-white/10">
              <td className="px-4 py-3 text-slate-400 font-semibold">
                {server.source_rank || '-'}
              </td>
              <td className="px-4 py-3 min-w-64">
                <Link href={getServerPath(server)} className="hover:opacity-75 transition-opacity">
                  <div className="font-semibold text-white">{server.name}</div>
                  <div className="text-xs text-slate-400">{server.host || server.ip}:{server.port || 7171}</div>
                </Link>
              </td>
              <td className="px-4 py-3">
                <div className="text-slate-200 font-semibold">{server.source || 'submitted'}</div>
                {server.source_id ? <div className="text-xs text-slate-500">#{server.source_id}</div> : null}
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
              <td className="px-4 py-3 text-center font-semibold text-slate-200">
                {formatNumber(server.points)}
              </td>
              <td className="px-4 py-3 text-center">
                <div className="font-semibold text-slate-200">{Number(server.average_rating || 0).toFixed(2)}</div>
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
              <td className="px-4 py-3 text-slate-400">
                {lastSeen(server)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
