import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-forum');
}

export default function CustomNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-forum" />;
}
