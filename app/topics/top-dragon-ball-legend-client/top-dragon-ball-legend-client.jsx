import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-client');
}

export default function TopDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-client" />;
}
