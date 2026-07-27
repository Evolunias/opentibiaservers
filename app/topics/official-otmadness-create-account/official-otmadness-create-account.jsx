import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-create-account');
}

export default function OfficialOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-create-account" />;
}
