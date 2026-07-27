import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-guide');
}

export default function OldSchoolClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-guide" />;
}
