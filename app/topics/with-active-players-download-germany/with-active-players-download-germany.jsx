import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-download-germany');
}

export default function WithActivePlayersDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-download-germany" />;
}
