import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-login');
}

export default function CustomZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-login" />;
}
