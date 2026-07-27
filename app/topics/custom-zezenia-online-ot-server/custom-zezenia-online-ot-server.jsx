import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-ot-server');
}

export default function CustomZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-ot-server" />;
}
