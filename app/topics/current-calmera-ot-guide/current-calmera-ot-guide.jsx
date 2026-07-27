import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-guide');
}

export default function CurrentCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-guide" />;
}
