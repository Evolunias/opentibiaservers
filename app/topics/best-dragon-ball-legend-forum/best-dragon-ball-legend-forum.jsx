import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-forum');
}

export default function BestDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-forum" />;
}
