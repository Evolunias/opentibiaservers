import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-high-exp');
}

export default function DragonBallLegendHighExpKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-high-exp" />;
}
