import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-9-6-pvpe-server');
}

export default function DragonBallLegend96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-9-6-pvpe-server" />;
}
