import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-guide');
}

export default function OldSchoolRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-guide" />;
}
