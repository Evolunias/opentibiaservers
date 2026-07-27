import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-guide');
}

export default function OldSchoolAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-guide" />;
}
