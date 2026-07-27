import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-guide');
}

export default function LowrateCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-guide" />;
}
