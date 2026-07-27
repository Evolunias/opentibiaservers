import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-open-tibia');
}

export default function NewSeasonTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-open-tibia" />;
}
