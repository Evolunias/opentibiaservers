import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-mexico');
}

export default function DragonBallLegendNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-mexico" />;
}
