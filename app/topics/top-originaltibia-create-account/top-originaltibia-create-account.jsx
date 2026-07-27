import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-create-account');
}

export default function TopOriginaltibiaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-create-account" />;
}
