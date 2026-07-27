import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-create-account');
}

export default function FreshStartMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-create-account" />;
}
