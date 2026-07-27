import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-create-account');
}

export default function TopOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-create-account" />;
}
