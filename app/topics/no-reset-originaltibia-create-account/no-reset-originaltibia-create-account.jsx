import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-create-account');
}

export default function NoResetOriginaltibiaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-create-account" />;
}
