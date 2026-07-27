import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-seasonal-server-europe');
}

export default function DragonBallLegendSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-seasonal-server-europe" />;
}
