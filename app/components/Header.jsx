export default function Header() {
  return (
    <header className="bg-white border-b-4 border-transparent shadow-lg relative overflow-hidden" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
      borderImageSource: 'linear-gradient(90deg, #ff006e, #00d4ff, #00ff88, #ffb700, #ff006e)',
      borderImageSlice: 1,
      animation: 'rainbow-shimmer 8s ease infinite'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-3" style={{ animation: 'float 3s ease-in-out infinite' }}>
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg transform hover:scale-110 transition-transform duration-300 border-2 border-transparent bg-clip-padding"
            style={{
              backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #0066ff, #ff006e, #00d4ff)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}>
            ⚔️
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg" style={{
            animation: 'gradient-shift 6s ease infinite',
            backgroundSize: '200% 200%'
          }}>Open Tibia Servers</h1>
        </div>
        <p className="text-gray-700 text-lg font-medium">Browse and compare open Tibia servers with comprehensive stats and details</p>
      </div>
    </header>
  );
}
