import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-guide');
}

export default function OldSchoolTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-guide" />;
}
