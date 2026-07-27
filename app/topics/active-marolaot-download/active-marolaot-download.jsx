import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-download');
}

export default function ActiveMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-download" />;
}
