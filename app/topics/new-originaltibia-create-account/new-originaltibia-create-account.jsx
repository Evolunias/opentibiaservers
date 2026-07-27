import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-create-account');
}

export default function NewOriginaltibiaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-create-account" />;
}
