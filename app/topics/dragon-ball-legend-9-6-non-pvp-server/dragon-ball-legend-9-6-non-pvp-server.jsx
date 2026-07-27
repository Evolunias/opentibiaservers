import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-9-6-non-pvp-server');
}

export default function DragonBallLegend96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-9-6-non-pvp-server" />;
}
