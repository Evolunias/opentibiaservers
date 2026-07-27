import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-guide');
}

export default function OldSchoolClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-guide" />;
}
