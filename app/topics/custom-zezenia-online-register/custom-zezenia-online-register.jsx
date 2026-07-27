import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-register');
}

export default function CustomZezeniaOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-register" />;
}
