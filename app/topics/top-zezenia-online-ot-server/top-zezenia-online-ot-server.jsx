import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-ot-server');
}

export default function TopZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-ot-server" />;
}
