import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-argentina');
}

export default function DragonBallLegendNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-argentina" />;
}
