import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-germany');
}

export default function DragonBallLegendPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-germany" />;
}
