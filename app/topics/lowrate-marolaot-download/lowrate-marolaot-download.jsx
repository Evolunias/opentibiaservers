import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-download');
}

export default function LowrateMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-download" />;
}
