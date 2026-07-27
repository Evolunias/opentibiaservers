import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-guide');
}

export default function OldSchoolTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-guide" />;
}
