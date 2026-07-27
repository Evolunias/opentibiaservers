import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-download');
}

export default function FreshStartMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-download" />;
}
