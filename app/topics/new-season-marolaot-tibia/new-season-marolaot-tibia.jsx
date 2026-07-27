import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-tibia');
}

export default function NewSeasonMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-tibia" />;
}
