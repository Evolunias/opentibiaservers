import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-europe-servers');
}

export default function DragonBallLegendEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-europe-servers" />;
}
