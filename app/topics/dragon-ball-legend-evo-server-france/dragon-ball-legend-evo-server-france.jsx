import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-france');
}

export default function DragonBallLegendEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-france" />;
}
