import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-discord-download');
}

export default function Tibia854WithDiscordDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-discord-download" />;
}
