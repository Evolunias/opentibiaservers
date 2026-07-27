import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-forum');
}

export default function PopularTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-forum" />;
}
