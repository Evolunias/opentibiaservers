import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-forum');
}

export default function NewNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-forum" />;
}
