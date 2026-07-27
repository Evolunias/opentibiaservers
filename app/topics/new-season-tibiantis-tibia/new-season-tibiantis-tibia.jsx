import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-tibia');
}

export default function NewSeasonTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-tibia" />;
}
