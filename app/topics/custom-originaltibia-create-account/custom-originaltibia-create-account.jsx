import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-create-account');
}

export default function CustomOriginaltibiaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-create-account" />;
}
