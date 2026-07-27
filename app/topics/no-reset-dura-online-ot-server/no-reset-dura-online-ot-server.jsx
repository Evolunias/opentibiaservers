import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-ot-server');
}

export default function NoResetDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-ot-server" />;
}
