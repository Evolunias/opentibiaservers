import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-create-account');
}

export default function OldSchoolMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-create-account" />;
}
