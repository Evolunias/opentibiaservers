import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-forum');
}

export default function ActiveZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-forum" />;
}
