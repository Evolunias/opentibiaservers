import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-create-account');
}

export default function NewSeasonMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-create-account" />;
}
