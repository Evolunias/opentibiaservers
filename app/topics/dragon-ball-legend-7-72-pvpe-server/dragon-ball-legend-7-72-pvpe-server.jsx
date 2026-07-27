import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-7-72-pvpe-server');
}

export default function DragonBallLegend772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-7-72-pvpe-server" />;
}
