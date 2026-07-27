import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-create-account');
}

export default function ActiveCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-create-account" />;
}
