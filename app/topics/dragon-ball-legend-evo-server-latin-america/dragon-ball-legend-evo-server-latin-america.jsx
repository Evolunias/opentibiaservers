import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-latin-america');
}

export default function DragonBallLegendEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-latin-america" />;
}
