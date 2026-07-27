import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-guide');
}

export default function OldSchoolThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-guide" />;
}
