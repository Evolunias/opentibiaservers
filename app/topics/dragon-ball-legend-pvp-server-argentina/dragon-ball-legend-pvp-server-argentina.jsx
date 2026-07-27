import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-argentina');
}

export default function DragonBallLegendPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-argentina" />;
}
