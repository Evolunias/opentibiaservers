import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-client');
}

export default function NewDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-client" />;
}
