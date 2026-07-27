import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-uk');
}

export default function OldSchoolGuideUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-uk" />;
}
