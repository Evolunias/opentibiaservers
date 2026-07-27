import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-8-1-non-pvp-server');
}

export default function DragonBallLegend81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-8-1-non-pvp-server" />;
}
