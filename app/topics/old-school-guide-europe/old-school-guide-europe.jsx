import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-europe');
}

export default function OldSchoolGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-europe" />;
}
