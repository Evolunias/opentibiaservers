import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-discord-download');
}

export default function Tibia84WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-discord-download" />;
}
