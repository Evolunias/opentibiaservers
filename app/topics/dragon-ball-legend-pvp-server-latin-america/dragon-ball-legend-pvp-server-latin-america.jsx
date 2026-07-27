import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-latin-america');
}

export default function DragonBallLegendPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-latin-america" />;
}
