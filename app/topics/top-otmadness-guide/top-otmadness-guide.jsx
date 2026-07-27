import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-guide');
}

export default function TopOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-guide" />;
}
