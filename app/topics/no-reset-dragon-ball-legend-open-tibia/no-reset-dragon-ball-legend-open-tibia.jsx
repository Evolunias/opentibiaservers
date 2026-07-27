import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-open-tibia');
}

export default function NoResetDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-open-tibia" />;
}
