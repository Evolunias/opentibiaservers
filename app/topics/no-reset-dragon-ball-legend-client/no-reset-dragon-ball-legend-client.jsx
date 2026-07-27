import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-client');
}

export default function NoResetDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-client" />;
}
