import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-forum');
}

export default function TopZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-forum" />;
}
