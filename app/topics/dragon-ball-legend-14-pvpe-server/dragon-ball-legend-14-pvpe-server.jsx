import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-14-pvpe-server');
}

export default function DragonBallLegend14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-14-pvpe-server" />;
}
