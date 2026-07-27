import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-guide');
}

export default function OldSchoolMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-guide" />;
}
