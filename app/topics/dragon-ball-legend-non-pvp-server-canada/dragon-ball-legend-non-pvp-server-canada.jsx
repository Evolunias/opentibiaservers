import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-canada');
}

export default function DragonBallLegendNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-canada" />;
}
