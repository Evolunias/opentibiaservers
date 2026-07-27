import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-guide');
}

export default function TopCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-guide" />;
}
