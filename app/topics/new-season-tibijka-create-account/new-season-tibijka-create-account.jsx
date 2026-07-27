import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-create-account');
}

export default function NewSeasonTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-create-account" />;
}
