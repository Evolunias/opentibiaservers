import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-guide');
}

export default function FreshStartCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-guide" />;
}
