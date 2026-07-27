import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dragon-ball-legend-server');
}

export default function RealMapDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-dragon-ball-legend-server" />;
}
