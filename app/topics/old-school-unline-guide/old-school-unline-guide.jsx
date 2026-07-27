import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-guide');
}

export default function OldSchoolUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-guide" />;
}
