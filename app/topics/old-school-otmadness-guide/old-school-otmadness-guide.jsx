import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-guide');
}

export default function OldSchoolOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-guide" />;
}
