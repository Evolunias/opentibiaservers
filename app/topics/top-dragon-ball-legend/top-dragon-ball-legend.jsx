import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend');
}

export default function TopDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend" />;
}
