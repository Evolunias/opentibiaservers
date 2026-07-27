import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-guide');
}

export default function OldSchoolMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-guide" />;
}
