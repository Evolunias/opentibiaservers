import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-forum');
}

export default function NewDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-forum" />;
}
