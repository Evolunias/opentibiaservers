import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-create-account');
}

export default function CurrentMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-create-account" />;
}
