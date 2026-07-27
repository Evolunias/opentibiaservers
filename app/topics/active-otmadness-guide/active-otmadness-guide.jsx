import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-guide');
}

export default function ActiveOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-guide" />;
}
