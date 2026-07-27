import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-guide');
}

export default function OldSchoolNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-guide" />;
}
