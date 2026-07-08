'use client';

import Link from 'next/link';
import { getServerPath } from '@/lib/server-paths';

const statusClass = (server) => (server.is_online ? 'text-green-700' : 'text-red-700');

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
    <div className="overflow-x-auto bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-left px-4 py-3 font-semibold text-gray-900">Rank</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-900">Server</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-900">Source</th>
            <th className="text-center px-4 py-3 font-semibold text-gray-900">Players</th>
            <th className="text-center px-4 py-3 font-semibold text-gray-900">Peak</th>
            <th className="text-center px-4 py-3 font-semibold text-gray-900">Points</th>
            <th className="text-center px-4 py-3 font-semibold text-gray-900">Rating</th>
            <th className="text-center px-4 py-3 font-semibold text-gray-900">Client</th>
            <th className="text-center px-4 py-3 font-semibold text-gray-900">EXP</th>
            <th className="text-center px-4 py-3 font-semibold text-gray-900">Uptime</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-900">Location</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-900">Seen</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server) => (
            <tr key={server.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-600 font-semibold">
                {server.source_rank || '-'}
              </td>
              <td className="px-4 py-3 min-w-64">
                <Link href={getServerPath(server)} className="hover:opacity-75 transition-opacity">
                  <div className="font-semibold text-gray-900">{server.name}</div>
                  <div className="text-xs text-gray-600">{server.host || server.ip}:{server.port || 7171}</div>
                </Link>
              </td>
              <td className="px-4 py-3">
                <div className="text-gray-900 font-semibold">{server.source || 'submitted'}</div>
                {server.source_id ? <div className="text-xs text-gray-500">#{server.source_id}</div> : null}
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`font-bold ${statusClass(server)}`}>
                  {formatNumber(server.players_online || 0)}
                </span>
                <span className="text-gray-500"> / {formatNumber(server.max_players)}</span>
              </td>
              <td className="px-4 py-3 text-center font-semibold text-gray-900">
                {formatNumber(server.players_peak || 0)}
              </td>
              <td className="px-4 py-3 text-center font-semibold text-gray-900">
                {formatNumber(server.points)}
              </td>
              <td className="px-4 py-3 text-center">
                <div className="font-semibold text-gray-900">{Number(server.average_rating || 0).toFixed(2)}</div>
                <div className="text-xs text-gray-500">{server.review_count || 0} reviews</div>
              </td>
              <td className="px-4 py-3 text-center font-semibold text-gray-900">
                {server.version || '-'}
              </td>
              <td className="px-4 py-3 text-center text-gray-700">
                <span className="font-semibold">{server.exp_rate || 1}x</span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className="font-semibold text-gray-900">{formatPercent(server.uptime_percent)}</span>
              </td>
              <td className="px-4 py-3 text-gray-700">
                <div>{server.location || '-'}</div>
                <div className="text-xs text-gray-500">{server.world_type || '-'}</div>
              </td>
              <td className="px-4 py-3 text-gray-600">
                {lastSeen(server)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
