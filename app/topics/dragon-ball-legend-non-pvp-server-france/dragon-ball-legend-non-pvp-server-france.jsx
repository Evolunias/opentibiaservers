import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-non-pvp-server-france');
}

export default function DragonBallLegendNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-non-pvp-server-france" />;
}
