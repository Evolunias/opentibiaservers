import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-login');
}

export default function LowrateZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-login" />;
}
