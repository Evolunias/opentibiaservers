import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-forum');
}

export default function CustomZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-forum" />;
}
