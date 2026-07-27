import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-create-account');
}

export default function OtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="otmadness-create-account" />;
}
