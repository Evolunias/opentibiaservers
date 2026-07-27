import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-guide');
}

export default function OldSchoolCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-guide" />;
}
