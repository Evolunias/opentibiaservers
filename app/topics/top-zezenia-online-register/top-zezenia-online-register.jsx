import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-register');
}

export default function TopZezeniaOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-register" />;
}
