import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-create-account');
}

export default function CurrentOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-create-account" />;
}
