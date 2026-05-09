'use client';

export default function ViewToggle({ view, onViewChange }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onViewChange('grid')}
        className={`px-3 py-2 rounded border text-sm font-medium ${
          view === 'grid'
            ? 'bg-gray-900 border-gray-900 text-white'
            : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
        }`}
      >
        Grid
      </button>
      <button
        onClick={() => onViewChange('table')}
        className={`px-3 py-2 rounded border text-sm font-medium ${
          view === 'table'
            ? 'bg-gray-900 border-gray-900 text-white'
            : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
        }`}
      >
        Table
      </button>
    </div>
  );
}
