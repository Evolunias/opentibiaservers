import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-10-0-pvpe-server');
}

export default function DragonBallLegend100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-10-0-pvpe-server" />;
}
