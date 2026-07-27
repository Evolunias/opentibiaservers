import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-guide');
}

export default function OldSchoolMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-guide" />;
}
