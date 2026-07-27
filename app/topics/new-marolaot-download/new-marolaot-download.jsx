import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-download');
}

export default function NewMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-download" />;
}
