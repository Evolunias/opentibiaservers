import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-client');
}

export default function CustomDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-client" />;
}
