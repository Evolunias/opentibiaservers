import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-guide');
}

export default function HighrateCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-guide" />;
}
