import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-create-account');
}

export default function NewSeasonRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-create-account" />;
}
