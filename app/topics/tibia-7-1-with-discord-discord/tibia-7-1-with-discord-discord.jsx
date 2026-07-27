import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-discord-discord');
}

export default function Tibia71WithDiscordDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-discord-discord" />;
}
