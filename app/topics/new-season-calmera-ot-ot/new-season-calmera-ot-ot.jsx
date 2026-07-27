import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-ot');
}

export default function NewSeasonCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-ot" />;
}
