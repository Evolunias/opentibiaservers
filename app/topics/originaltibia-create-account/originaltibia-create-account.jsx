import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-create-account');
}

export default function OriginaltibiaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-create-account" />;
}
