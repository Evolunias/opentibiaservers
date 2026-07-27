import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-create-account');
}

export default function LowrateMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-create-account" />;
}
