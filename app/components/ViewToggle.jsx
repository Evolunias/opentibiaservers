'use client';

export default function ViewToggle({ view, onViewChange }) {
  return (
    <div className="view-toggle flex gap-2">
      <button
        onClick={() => onViewChange('grid')}
        className={`px-3 py-2 rounded border text-sm font-medium ${
          view === 'grid'
            ? 'bg-emerald-400 border-emerald-300 text-slate-950'
            : 'bg-white/10 border-white/15 text-slate-200 hover:border-white/35'
        }`}
      >
        Grid
      </button>
      <button
        onClick={() => onViewChange('table')}
        className={`px-3 py-2 rounded border text-sm font-medium ${
          view === 'table'
            ? 'bg-emerald-400 border-emerald-300 text-slate-950'
            : 'bg-white/10 border-white/15 text-slate-200 hover:border-white/35'
        }`}
      >
        Table
      </button>
    </div>
  );
}
