import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-download');
}

export default function Tibia15WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-download" />;
}
