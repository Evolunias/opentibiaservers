import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-open-tibia');
}

export default function NewSeasonCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-open-tibia" />;
}
