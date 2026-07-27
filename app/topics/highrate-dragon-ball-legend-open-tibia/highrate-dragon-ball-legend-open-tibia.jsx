import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-open-tibia');
}

export default function HighrateDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-open-tibia" />;
}
