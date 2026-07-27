import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-europe-server');
}

export default function DragonBallLegendEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-europe-server" />;
}
