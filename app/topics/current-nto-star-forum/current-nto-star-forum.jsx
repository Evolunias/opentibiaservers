import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-forum');
}

export default function CurrentNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-forum" />;
}
