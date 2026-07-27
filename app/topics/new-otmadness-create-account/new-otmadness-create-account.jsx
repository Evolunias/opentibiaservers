import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-create-account');
}

export default function NewOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-create-account" />;
}
