import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-rules');
}

export default function CustomDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-rules" />;
}
