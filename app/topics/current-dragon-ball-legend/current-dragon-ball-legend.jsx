import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend');
}

export default function CurrentDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend" />;
}
