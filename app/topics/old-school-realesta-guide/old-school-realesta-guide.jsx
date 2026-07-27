import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-guide');
}

export default function OldSchoolRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-guide" />;
}
