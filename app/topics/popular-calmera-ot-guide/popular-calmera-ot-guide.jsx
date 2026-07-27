import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-guide');
}

export default function PopularCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-guide" />;
}
