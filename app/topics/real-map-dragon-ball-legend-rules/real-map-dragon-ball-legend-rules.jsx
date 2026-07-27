import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dragon-ball-legend-rules');
}

export default function RealMapDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-dragon-ball-legend-rules" />;
}
