import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-ot-server');
}

export default function NoResetZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-ot-server" />;
}
