import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-guide');
}

export default function OfficialCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-guide" />;
}
