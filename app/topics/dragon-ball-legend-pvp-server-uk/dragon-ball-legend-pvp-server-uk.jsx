import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-uk');
}

export default function DragonBallLegendPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-uk" />;
}
