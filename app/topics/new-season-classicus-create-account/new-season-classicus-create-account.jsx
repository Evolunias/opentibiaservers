import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-create-account');
}

export default function NewSeasonClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-create-account" />;
}
