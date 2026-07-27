import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-download');
}

export default function MarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="marolaot-download" />;
}
