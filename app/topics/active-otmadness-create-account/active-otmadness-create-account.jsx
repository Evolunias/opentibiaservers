import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-create-account');
}

export default function ActiveOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-create-account" />;
}
