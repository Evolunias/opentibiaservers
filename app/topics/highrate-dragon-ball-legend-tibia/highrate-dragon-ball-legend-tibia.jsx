import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-tibia');
}

export default function HighrateDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-tibia" />;
}
