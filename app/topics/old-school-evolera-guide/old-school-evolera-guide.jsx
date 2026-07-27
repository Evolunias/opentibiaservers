import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-guide');
}

export default function OldSchoolEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-guide" />;
}
