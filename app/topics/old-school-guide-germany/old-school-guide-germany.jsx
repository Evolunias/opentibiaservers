import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-germany');
}

export default function OldSchoolGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-germany" />;
}
