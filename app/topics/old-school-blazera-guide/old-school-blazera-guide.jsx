import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-guide');
}

export default function OldSchoolBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-guide" />;
}
