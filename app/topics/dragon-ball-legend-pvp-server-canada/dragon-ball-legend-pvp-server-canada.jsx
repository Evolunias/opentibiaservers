import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-canada');
}

export default function DragonBallLegendPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-canada" />;
}
