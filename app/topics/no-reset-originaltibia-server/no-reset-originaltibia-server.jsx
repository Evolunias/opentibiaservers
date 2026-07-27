import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-server');
}

export default function NoResetOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-server" />;
}
