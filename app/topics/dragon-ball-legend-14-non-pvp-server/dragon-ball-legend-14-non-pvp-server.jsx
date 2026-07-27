import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-14-non-pvp-server');
}

export default function DragonBallLegend14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-14-non-pvp-server" />;
}
