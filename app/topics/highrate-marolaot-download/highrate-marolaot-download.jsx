import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-download');
}

export default function HighrateMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-download" />;
}
