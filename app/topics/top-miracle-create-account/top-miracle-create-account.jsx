import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-create-account');
}

export default function TopMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-create-account" />;
}
