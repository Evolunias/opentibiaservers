import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-brazil');
}

export default function DragonBallLegendPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-brazil" />;
}
