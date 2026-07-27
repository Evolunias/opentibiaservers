import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-download');
}

export default function Tibia11WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-download" />;
}
