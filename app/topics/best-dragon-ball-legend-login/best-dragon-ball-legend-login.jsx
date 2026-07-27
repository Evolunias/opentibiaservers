import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-login');
}

export default function BestDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-login" />;
}
