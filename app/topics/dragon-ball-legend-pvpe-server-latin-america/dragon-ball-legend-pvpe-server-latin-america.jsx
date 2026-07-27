import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-latin-america');
}

export default function DragonBallLegendPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-latin-america" />;
}
