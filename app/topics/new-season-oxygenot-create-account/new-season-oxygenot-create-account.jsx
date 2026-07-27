import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-create-account');
}

export default function NewSeasonOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-create-account" />;
}
