import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-download');
}

export default function TopMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-download" />;
}
