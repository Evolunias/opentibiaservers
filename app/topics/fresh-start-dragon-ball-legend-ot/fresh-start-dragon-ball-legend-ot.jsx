import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-ot');
}

export default function FreshStartDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-ot" />;
}
