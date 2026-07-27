import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-create-account');
}

export default function FreshStartCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-create-account" />;
}
