import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-guide');
}

export default function OldSchoolBaiakIlusionGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-guide" />;
}
