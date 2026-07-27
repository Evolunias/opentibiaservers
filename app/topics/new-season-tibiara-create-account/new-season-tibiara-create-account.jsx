import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-create-account');
}

export default function NewSeasonTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-create-account" />;
}
