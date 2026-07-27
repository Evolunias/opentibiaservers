import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-poland');
}

export default function DragonBallLegendPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-poland" />;
}
