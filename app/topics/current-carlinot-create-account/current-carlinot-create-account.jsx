import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-create-account');
}

export default function CurrentCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-create-account" />;
}
