import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-guide');
}

export default function OldSchoolThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-guide" />;
}
