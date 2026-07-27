import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-forum');
}

export default function ActiveNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-forum" />;
}
