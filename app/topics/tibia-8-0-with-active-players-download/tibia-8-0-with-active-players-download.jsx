import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-active-players-download');
}

export default function Tibia80WithActivePlayersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-active-players-download" />;
}
