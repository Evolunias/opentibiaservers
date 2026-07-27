import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-discord-download');
}

export default function Tibia14WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-discord-download" />;
}
