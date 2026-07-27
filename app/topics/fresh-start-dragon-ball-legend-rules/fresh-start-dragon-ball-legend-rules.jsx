import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-rules');
}

export default function FreshStartDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-rules" />;
}
