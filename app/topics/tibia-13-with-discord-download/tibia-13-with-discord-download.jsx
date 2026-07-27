import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-discord-download');
}

export default function Tibia13WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-discord-download" />;
}
