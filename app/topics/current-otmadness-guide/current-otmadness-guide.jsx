import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-guide');
}

export default function CurrentOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-guide" />;
}
