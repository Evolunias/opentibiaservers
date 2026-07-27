import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-rules');
}

export default function LowrateDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-rules" />;
}
