import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-create-account');
}

export default function PopularMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-create-account" />;
}
