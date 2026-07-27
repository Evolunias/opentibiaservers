import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-guide');
}

export default function BestOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-guide" />;
}
