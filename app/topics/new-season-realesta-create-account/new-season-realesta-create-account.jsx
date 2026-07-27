import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-create-account');
}

export default function NewSeasonRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-create-account" />;
}
