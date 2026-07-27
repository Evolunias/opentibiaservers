import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend');
}

export default function BestDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend" />;
}
