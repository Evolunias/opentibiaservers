import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-open-tibia');
}

export default function NewSeasonMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-open-tibia" />;
}
