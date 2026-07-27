import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-uk');
}

export default function DragonBallLegendNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-uk" />;
}
