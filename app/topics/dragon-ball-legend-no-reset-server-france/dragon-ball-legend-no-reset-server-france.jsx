import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-no-reset-server-france');
}

export default function DragonBallLegendNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-no-reset-server-france" />;
}
