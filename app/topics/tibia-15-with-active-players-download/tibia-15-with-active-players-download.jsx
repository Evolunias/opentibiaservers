import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-download');
}

export default function Tibia15WithActivePlayersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-download" />;
}
