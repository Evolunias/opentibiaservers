'use client';

import Link from 'next/link';
import { getServerPath } from '@/lib/server-paths';

const typeClass = (type) => {
  switch (type) {
    case 'PVP':
      return 'bg-red-500/15 text-red-200 border-red-400/30';
    case 'Non-PVP':
      return 'bg-emerald-500/15 text-emerald-200 border-emerald-400/30';
    case 'PVP-Enforced':
      return 'bg-amber-500/15 text-amber-200 border-amber-400/30';
    default:
      return 'bg-white/10 text-slate-200 border-white/15';
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

function stars(value) {
  const count = Math.max(3, Math.min(5, Math.round(Number(value || 0))));
  return `${'★'.repeat(count)}${'☆'.repeat(5 - count)}`;
}

export default function ServerCard({ server }) {
  return (
    <Link href={getServerPath(server)} className="block h-full">
      <article className="server-card group cursor-pointer h-full">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`status-dot ${server.is_online ? 'status-dot--online' : 'status-dot--offline'}`} />
            </div>
            <h3 className="text-base font-bold text-white truncate">{server.name}</h3>
            <p className="text-xs text-slate-400 truncate">{server.host || server.ip}:{server.port || 7171}</p>
          </div>
          <span className={`text-xs px-2 py-1 rounded border font-semibold ${typeClass(server.world_type)}`}>
            {server.world_type || 'PVP'}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
          <div className="server-metric">
            <p className="text-slate-400 uppercase font-semibold mb-1">Online</p>
            <p className="text-lg font-bold text-white">{number(server.players_online || 0)}</p>
          </div>
          <div className="server-metric">
            <p className="text-slate-400 uppercase font-semibold mb-1">Max</p>
            <p className="text-lg font-bold text-white">{number(server.max_players)}</p>
          </div>
          <div className="server-metric">
            <p className="text-slate-400 uppercase font-semibold mb-1">Peak</p>
            <p className="text-lg font-bold text-white">{number(server.players_peak || 0)}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 mb-3 text-xs">
          <div className="server-submetric">
            <p className="text-slate-400 font-semibold mb-1">Client</p>
            <p className="font-bold text-white">{server.version || '-'}</p>
          </div>
          <div className="server-submetric">
            <p className="text-slate-400 font-semibold mb-1">EXP</p>
            <p className="font-bold text-white">{server.exp_rate || 1}x</p>
          </div>
          <div className="server-submetric">
            <p className="text-slate-400 font-semibold mb-1">Uptime</p>
            <p className="font-bold text-white">{percent(server.uptime_percent)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
          <div className="server-metric">
            <p className="text-slate-400 uppercase font-semibold mb-1">Rating</p>
            <p className="font-bold text-white">{stars(server.average_rating)} {Number(server.average_rating || 0).toFixed(1)} / 5</p>
            <p className="text-xs text-slate-400">{number(server.review_count)} reviews</p>
          </div>
          <div className="server-metric">
            <p className="text-slate-400 uppercase font-semibold mb-1">Monitor</p>
            <p className="font-bold text-white">{server.last_monitor_status || 'unknown'}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 text-xs">
          {server.location ? (
            <span className="server-tag">
              {server.location}
            </span>
          ) : null}
          {server.server_engine ? (
            <span className="server-tag truncate max-w-full">
              {server.server_engine}
            </span>
          ) : null}
        </div>
      </article>
    </Link>
  );
}
