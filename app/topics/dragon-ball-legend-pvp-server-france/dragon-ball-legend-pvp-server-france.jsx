import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-france');
}

export default function DragonBallLegendPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-france" />;
}
