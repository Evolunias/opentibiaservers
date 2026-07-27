import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-discord-download');
}

export default function Tibia100WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-discord-download" />;
}
