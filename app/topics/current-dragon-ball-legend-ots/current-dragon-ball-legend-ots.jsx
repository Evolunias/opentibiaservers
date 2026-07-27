import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-ots');
}

export default function CurrentDragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-ots" />;
}
