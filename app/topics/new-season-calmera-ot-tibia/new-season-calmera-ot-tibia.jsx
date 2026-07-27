import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-tibia');
}

export default function NewSeasonCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-tibia" />;
}
