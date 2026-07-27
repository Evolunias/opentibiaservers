import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-download');
}

export default function CurrentMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-download" />;
}
