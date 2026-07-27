import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-create-account');
}

export default function NewSeasonTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-create-account" />;
}
