import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-poland');
}

export default function OldSchoolGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-poland" />;
}
