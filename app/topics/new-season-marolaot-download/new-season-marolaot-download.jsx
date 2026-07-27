import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-download');
}

export default function NewSeasonMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-download" />;
}
