import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-download');
}

export default function Tibia13WithActivePlayersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-download" />;
}
