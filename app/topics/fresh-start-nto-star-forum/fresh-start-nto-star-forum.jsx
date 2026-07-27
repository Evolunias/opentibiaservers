import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-forum');
}

export default function FreshStartNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-forum" />;
}
