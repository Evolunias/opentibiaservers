import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-create-account');
}

export default function RubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="rubinot-create-account" />;
}
