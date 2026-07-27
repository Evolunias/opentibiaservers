import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-poland');
}

export default function DragonBallLegendPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-poland" />;
}
