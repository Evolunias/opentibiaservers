import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-login');
}

export default function NoResetOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-login" />;
}
