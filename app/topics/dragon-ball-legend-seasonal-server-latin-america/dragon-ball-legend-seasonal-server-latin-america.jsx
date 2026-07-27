import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-latin-america');
}

export default function DragonBallLegendSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-latin-america" />;
}
