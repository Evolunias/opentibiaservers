import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-download-sweden');
}

export default function WithActivePlayersDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-download-sweden" />;
}
