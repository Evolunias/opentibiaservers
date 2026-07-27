import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-ot-server');
}

export default function ActiveZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-ot-server" />;
}
