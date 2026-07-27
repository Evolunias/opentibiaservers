import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-open-tibia');
}

export default function NewSeasonMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-open-tibia" />;
}
