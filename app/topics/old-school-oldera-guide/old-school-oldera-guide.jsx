import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-guide');
}

export default function OldSchoolOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-guide" />;
}
