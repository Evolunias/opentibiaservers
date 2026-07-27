import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-login');
}

export default function TopZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-login" />;
}
