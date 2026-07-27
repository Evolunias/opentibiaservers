import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-rules');
}

export default function CurrentDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-rules" />;
}
