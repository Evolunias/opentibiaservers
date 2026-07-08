'use client';

import Link from 'next/link';
import { getServerPath } from '@/lib/server-paths';

const typeClass = (type) => {
  switch (type) {
    case 'PVP':
      return 'bg-red-50 text-red-700 border-red-200';
    case 'Non-PVP':
      return 'bg-green-50 text-green-700 border-green-200';
    case 'PVP-Enforced':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

function number(value) {
  if (value === null || value === undefined) return '-';
  return Number(value).toLocaleString();
}

function percent(value) {
  if (value === null || value === undefined) return '-';
  return `${Number(value).toFixed(Number(value) % 1 === 0 ? 0 : 2)}%`;
}

export default function ServerCard({ server }) {
  return (
    <Link href={getServerPath(server)} className="block h-full">
      <article className="bg-white border border-gray-200 rounded p-4 hover:border-gray-400 hover:shadow-md cursor-pointer h-full">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {server.source_rank ? (
                <span className="text-xs font-bold text-gray-500">#{server.source_rank}</span>
              ) : null}
              <span className={`w-2.5 h-2.5 rounded-full ${server.is_online ? 'bg-green-600' : 'bg-red-600'}`} />
            </div>
            <h3 className="text-base font-bold text-gray-900 truncate">{server.name}</h3>
            <p className="text-xs text-gray-600 truncate">{server.host || server.ip}:{server.port || 7171}</p>
          </div>
          <span className={`text-xs px-2 py-1 rounded border font-semibold ${typeClass(server.world_type)}`}>
            {server.world_type || 'PVP'}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
          <div className="bg-gray-50 rounded p-2">
            <p className="text-gray-500 uppercase font-semibold mb-1">Online</p>
            <p className="text-lg font-bold text-gray-900">{number(server.players_online || 0)}</p>
          </div>
          <div className="bg-gray-50 rounded p-2">
            <p className="text-gray-500 uppercase font-semibold mb-1">Max</p>
            <p className="text-lg font-bold text-gray-900">{number(server.max_players)}</p>
          </div>
          <div className="bg-gray-50 rounded p-2">
            <p className="text-gray-500 uppercase font-semibold mb-1">Peak</p>
            <p className="text-lg font-bold text-gray-900">{number(server.players_peak || 0)}</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 mb-3 text-xs">
          <div className="bg-gray-50 rounded p-1.5 text-center">
            <p className="text-gray-500 font-semibold mb-1">Client</p>
            <p className="font-bold text-gray-900">{server.version || '-'}</p>
          </div>
          <div className="bg-gray-50 rounded p-1.5 text-center">
            <p className="text-gray-500 font-semibold mb-1">EXP</p>
            <p className="font-bold text-gray-900">{server.exp_rate || 1}x</p>
          </div>
          <div className="bg-gray-50 rounded p-1.5 text-center">
            <p className="text-gray-500 font-semibold mb-1">Uptime</p>
            <p className="font-bold text-gray-900">{percent(server.uptime_percent)}</p>
          </div>
          <div className="bg-gray-50 rounded p-1.5 text-center">
            <p className="text-gray-500 font-semibold mb-1">Pts</p>
            <p className="font-bold text-gray-900">{number(server.points)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
          <div className="bg-gray-50 rounded p-2">
            <p className="text-gray-500 uppercase font-semibold mb-1">Rating</p>
            <p className="font-bold text-gray-900">{Number(server.average_rating || 0).toFixed(2)} / 5</p>
          </div>
          <div className="bg-gray-50 rounded p-2">
            <p className="text-gray-500 uppercase font-semibold mb-1">Monitor</p>
            <p className="font-bold text-gray-900">{server.last_monitor_status || 'unknown'}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 text-xs">
          {server.source ? (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded font-semibold">
              {server.source}
            </span>
          ) : null}
          {server.location ? (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded font-semibold">
              {server.location}
            </span>
          ) : null}
          {server.server_engine ? (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded font-semibold truncate max-w-full">
              {server.server_engine}
            </span>
          ) : null}
        </div>
      </article>
    </Link>
  );
}
