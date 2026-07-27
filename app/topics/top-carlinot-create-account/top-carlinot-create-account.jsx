import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-create-account');
}

export default function TopCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-create-account" />;
}
