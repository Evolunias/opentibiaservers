import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-create-account');
}

export default function NewRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-create-account" />;
}
