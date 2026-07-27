import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-real-map-server-europe');
}

export default function DragonBallLegendRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-real-map-server-europe" />;
}
