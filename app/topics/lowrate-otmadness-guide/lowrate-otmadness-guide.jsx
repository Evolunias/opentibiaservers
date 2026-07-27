import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-guide');
}

export default function LowrateOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-guide" />;
}
