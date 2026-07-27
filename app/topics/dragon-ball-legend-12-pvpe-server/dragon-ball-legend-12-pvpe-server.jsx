import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-pvpe-server');
}

export default function DragonBallLegend12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-pvpe-server" />;
}
