import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-create-account');
}

export default function CurrentRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-create-account" />;
}
