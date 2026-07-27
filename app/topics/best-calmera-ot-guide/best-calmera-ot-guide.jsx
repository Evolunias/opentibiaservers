import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-guide');
}

export default function BestCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-guide" />;
}
