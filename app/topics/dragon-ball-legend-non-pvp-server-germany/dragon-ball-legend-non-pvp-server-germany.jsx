import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-germany');
}

export default function DragonBallLegendNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-germany" />;
}
