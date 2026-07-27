import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-ot');
}

export default function BestDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-ot" />;
}
