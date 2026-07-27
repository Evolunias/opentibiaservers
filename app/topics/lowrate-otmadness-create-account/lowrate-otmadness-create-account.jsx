import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-create-account');
}

export default function LowrateOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-create-account" />;
}
