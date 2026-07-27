import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-create-account');
}

export default function ActiveMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-create-account" />;
}
