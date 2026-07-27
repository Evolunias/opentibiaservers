import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-real-map-server-usa');
}

export default function DragonBallLegendRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-real-map-server-usa" />;
}
