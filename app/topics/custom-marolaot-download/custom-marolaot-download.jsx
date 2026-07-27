import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-download');
}

export default function CustomMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-download" />;
}
