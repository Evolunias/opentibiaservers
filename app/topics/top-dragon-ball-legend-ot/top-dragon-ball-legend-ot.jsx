import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-ot');
}

export default function TopDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-ot" />;
}
