import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-create-account');
}

export default function PopularCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-create-account" />;
}
