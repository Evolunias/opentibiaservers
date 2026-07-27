import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-official');
}

export default function NewSeasonCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-official" />;
}
