import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-download');
}

export default function Tibia12WithActivePlayersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-download" />;
}
