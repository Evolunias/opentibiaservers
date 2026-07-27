import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-guide');
}

export default function FreshStartOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-guide" />;
}
