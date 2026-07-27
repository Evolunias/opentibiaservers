import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-create-account');
}

export default function NewSeasonCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-create-account" />;
}
