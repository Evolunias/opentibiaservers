import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-11-pvpe-server');
}

export default function DragonBallLegend11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-11-pvpe-server" />;
}
