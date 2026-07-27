import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-discord-download');
}

export default function Tibia71WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-discord-download" />;
}
