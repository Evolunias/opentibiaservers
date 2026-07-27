import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-forum');
}

export default function HighrateNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-forum" />;
}
