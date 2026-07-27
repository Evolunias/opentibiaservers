import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-create-account');
}

export default function BestCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-create-account" />;
}
