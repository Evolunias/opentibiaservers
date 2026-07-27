import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-servers-usa');
}

export default function DragonBallLegendEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-servers-usa" />;
}
