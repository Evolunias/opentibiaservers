import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-create-account');
}

export default function CustomCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-create-account" />;
}
