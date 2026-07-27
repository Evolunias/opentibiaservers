import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-client');
}

export default function LowrateZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-client" />;
}
