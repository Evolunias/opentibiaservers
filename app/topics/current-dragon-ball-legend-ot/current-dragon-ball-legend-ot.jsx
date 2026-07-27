import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-ot');
}

export default function CurrentDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-ot" />;
}
