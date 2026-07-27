import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-guide');
}

export default function OldSchoolCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-guide" />;
}
