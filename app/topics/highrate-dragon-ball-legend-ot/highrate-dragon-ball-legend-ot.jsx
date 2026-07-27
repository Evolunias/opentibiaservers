import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-ot');
}

export default function HighrateDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-ot" />;
}
