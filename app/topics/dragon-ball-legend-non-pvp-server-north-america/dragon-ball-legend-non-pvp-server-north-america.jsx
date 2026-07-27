import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-north-america');
}

export default function DragonBallLegendNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-north-america" />;
}
