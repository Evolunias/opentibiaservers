import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-discord-download');
}

export default function Tibia81WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-discord-download" />;
}
