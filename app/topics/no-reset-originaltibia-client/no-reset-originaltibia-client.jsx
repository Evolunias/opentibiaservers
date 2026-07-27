import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-client');
}

export default function NoResetOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-client" />;
}
