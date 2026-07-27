import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-create-account');
}

export default function CustomMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-create-account" />;
}
