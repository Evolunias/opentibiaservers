import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-real-map-server');
}

export default function DragonBallLegend12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-real-map-server" />;
}
