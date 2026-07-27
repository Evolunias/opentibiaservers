import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-rules');
}

export default function OfficialDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-rules" />;
}
