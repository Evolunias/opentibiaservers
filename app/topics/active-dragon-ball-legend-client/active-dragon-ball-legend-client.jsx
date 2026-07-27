import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-client');
}

export default function ActiveDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-client" />;
}
