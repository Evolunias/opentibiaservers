import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-client');
}

export default function DragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-client" />;
}
