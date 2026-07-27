import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-create-account');
}

export default function NewSeasonYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-create-account" />;
}
