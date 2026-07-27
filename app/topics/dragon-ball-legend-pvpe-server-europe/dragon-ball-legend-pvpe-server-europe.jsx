import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-europe');
}

export default function DragonBallLegendPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-europe" />;
}
