import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-guide');
}

export default function NewCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-guide" />;
}
