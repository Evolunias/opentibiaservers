import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-latin-america');
}

export default function DragonBallLegendNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-latin-america" />;
}
