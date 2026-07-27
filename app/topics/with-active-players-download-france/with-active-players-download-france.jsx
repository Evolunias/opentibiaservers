import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-download-france');
}

export default function WithActivePlayersDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-download-france" />;
}
