import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-download-latin-america');
}

export default function WithActivePlayersDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-download-latin-america" />;
}
