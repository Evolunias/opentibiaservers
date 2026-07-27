import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-create-account');
}

export default function ActiveOriginaltibiaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-create-account" />;
}
