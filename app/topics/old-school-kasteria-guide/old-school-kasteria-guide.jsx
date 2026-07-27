import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-guide');
}

export default function OldSchoolKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-guide" />;
}
