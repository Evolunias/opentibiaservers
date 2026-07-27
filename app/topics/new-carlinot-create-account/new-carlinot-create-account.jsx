import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-create-account');
}

export default function NewCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-create-account" />;
}
