import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-guide');
}

export default function NewSeasonCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-guide" />;
}
