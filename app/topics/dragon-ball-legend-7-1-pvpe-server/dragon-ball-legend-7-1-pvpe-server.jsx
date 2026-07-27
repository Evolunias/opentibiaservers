import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-7-1-pvpe-server');
}

export default function DragonBallLegend71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-7-1-pvpe-server" />;
}
