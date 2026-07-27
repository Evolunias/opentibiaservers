import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-register');
}

export default function PopularZezeniaOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-register" />;
}
