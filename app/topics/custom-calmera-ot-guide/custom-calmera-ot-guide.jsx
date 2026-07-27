import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-guide');
}

export default function CustomCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-guide" />;
}
