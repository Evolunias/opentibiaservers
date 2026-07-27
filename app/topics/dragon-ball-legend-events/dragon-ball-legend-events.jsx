import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-events');
}

export default function DragonBallLegendEventsKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-events" />;
}
