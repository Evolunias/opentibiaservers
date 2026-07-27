import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-download');
}

export default function Tibia14WithActivePlayersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-download" />;
}
