import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-forum');
}

export default function CurrentZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-forum" />;
}
