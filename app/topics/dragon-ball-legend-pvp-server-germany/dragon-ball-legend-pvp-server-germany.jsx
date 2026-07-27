import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-germany');
}

export default function DragonBallLegendPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-germany" />;
}
