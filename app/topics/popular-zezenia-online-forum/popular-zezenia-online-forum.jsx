import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-forum');
}

export default function PopularZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-forum" />;
}
