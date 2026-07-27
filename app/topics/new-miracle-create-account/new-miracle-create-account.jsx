import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-create-account');
}

export default function NewMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-create-account" />;
}
