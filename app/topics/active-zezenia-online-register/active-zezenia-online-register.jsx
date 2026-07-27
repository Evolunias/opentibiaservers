import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-register');
}

export default function ActiveZezeniaOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-register" />;
}
