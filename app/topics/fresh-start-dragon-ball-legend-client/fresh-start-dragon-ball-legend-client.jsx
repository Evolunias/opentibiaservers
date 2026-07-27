import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-client');
}

export default function FreshStartDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-client" />;
}
