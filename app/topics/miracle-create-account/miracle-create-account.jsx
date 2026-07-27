import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-create-account');
}

export default function MiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="miracle-create-account" />;
}
