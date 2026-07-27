import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-guide');
}

export default function OldSchoolTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-guide" />;
}
