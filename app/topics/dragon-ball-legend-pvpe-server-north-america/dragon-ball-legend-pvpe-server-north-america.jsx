import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-north-america');
}

export default function DragonBallLegendPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-north-america" />;
}
