import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-server');
}

export default function LowrateZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-server" />;
}
