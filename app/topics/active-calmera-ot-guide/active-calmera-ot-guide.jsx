import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-guide');
}

export default function ActiveCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-guide" />;
}
