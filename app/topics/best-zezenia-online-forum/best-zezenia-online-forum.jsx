import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-forum');
}

export default function BestZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-forum" />;
}
