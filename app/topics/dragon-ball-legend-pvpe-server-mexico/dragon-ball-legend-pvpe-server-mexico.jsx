import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-mexico');
}

export default function DragonBallLegendPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-mexico" />;
}
