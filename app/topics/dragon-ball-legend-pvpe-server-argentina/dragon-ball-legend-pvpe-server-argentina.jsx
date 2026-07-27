import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-argentina');
}

export default function DragonBallLegendPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-argentina" />;
}
