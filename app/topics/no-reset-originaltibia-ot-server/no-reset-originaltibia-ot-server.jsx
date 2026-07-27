import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-ot-server');
}

export default function NoResetOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-ot-server" />;
}
