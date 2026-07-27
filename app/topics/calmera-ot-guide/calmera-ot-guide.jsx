import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-guide');
}

export default function CalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-guide" />;
}
