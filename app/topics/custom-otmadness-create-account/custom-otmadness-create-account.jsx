import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-create-account');
}

export default function CustomOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-create-account" />;
}
