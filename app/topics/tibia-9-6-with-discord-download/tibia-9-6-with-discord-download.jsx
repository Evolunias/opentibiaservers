import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-discord-download');
}

export default function Tibia96WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-discord-download" />;
}
