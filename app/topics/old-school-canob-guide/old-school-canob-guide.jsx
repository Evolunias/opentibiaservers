import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-guide');
}

export default function OldSchoolCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-guide" />;
}
