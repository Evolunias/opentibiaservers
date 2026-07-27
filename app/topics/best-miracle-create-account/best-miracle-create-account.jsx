import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-create-account');
}

export default function BestMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-create-account" />;
}
