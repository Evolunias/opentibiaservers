import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend');
}

export default function PopularDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend" />;
}
