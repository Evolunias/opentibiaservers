import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-login');
}

export default function CurrentDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-login" />;
}
