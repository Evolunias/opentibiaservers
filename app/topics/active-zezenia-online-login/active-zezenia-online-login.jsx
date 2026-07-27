import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-login');
}

export default function ActiveZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-login" />;
}
