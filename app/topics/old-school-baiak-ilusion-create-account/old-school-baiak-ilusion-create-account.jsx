import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-create-account');
}

export default function OldSchoolBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-create-account" />;
}
