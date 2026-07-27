import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-official');
}

export default function NewSeasonMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-official" />;
}
