import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-ot-server');
}

export default function LowrateZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-ot-server" />;
}
