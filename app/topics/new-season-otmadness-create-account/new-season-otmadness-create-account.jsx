import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-create-account');
}

export default function NewSeasonOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-create-account" />;
}
