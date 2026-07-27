import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-forum');
}

export default function NtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="nto-star-forum" />;
}
