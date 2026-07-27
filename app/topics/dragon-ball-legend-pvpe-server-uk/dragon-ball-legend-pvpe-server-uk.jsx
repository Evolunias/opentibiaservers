import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-uk');
}

export default function DragonBallLegendPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-uk" />;
}
