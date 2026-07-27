import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-ot-server');
}

export default function CurrentZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-ot-server" />;
}
