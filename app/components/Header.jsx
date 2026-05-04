export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-b-4 border-amber-400 shadow-lg" style={{
      animation: 'gradient-shift 8s ease infinite',
      backgroundSize: '200% 200%'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-3" style={{ animation: 'float 3s ease-in-out infinite' }}>
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-600 shadow-lg transform hover:scale-110 transition-transform duration-300">
            ⚔️
          </div>
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">Tibia Servers</h1>
        </div>
        <p className="text-white/90 text-lg font-medium drop-shadow">Browse and compare open Tibia servers with comprehensive stats and details</p>
      </div>
    </header>
  );
}
