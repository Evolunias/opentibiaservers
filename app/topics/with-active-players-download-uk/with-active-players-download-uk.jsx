import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-download-uk');
}

export default function WithActivePlayersDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-download-uk" />;
}
