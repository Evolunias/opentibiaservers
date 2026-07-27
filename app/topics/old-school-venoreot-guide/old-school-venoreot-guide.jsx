import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-guide');
}

export default function OldSchoolVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-guide" />;
}
