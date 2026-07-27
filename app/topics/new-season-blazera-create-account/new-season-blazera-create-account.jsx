import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-create-account');
}

export default function NewSeasonBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-create-account" />;
}
