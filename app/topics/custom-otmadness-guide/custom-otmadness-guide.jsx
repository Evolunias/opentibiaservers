import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-guide');
}

export default function CustomOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-guide" />;
}
