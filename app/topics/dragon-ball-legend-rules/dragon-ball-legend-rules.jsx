import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-rules');
}

export default function DragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-rules" />;
}
