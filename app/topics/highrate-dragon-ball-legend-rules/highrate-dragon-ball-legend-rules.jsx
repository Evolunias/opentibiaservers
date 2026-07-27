import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-rules');
}

export default function HighrateDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-rules" />;
}
