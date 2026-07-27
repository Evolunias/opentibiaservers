import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-login');
}

export default function PopularZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-login" />;
}
