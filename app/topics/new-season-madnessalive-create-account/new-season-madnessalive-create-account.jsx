import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-create-account');
}

export default function NewSeasonMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-create-account" />;
}
