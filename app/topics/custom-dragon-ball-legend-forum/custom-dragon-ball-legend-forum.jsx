import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-forum');
}

export default function CustomDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-forum" />;
}
