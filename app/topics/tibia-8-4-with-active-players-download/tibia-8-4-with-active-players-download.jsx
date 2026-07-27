import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-active-players-download');
}

export default function Tibia84WithActivePlayersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-active-players-download" />;
}
