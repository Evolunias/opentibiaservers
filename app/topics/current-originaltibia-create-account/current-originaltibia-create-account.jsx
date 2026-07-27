import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-create-account');
}

export default function CurrentOriginaltibiaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-create-account" />;
}
