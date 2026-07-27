import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-france');
}

export default function DragonBallLegendSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-france" />;
}
