import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-create-account');
}

export default function NewSeasonThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-create-account" />;
}
