import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-discord-download');
}

export default function Tibia12WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-discord-download" />;
}
