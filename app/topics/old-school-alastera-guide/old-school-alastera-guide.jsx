import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-guide');
}

export default function OldSchoolAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-guide" />;
}
