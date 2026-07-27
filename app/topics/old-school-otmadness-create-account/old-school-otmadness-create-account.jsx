import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-create-account');
}

export default function OldSchoolOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-create-account" />;
}
