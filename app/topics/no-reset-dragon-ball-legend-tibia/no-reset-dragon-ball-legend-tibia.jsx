import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-tibia');
}

export default function NoResetDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-tibia" />;
}
