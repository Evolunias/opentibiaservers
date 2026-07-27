import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-poland');
}

export default function DragonBallLegendNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-poland" />;
}
