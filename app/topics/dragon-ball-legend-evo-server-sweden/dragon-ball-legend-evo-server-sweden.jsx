import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-sweden');
}

export default function DragonBallLegendEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-sweden" />;
}
