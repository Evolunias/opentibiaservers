import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-discord-discord');
}

export default function Tibia12WithDiscordDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-discord-discord" />;
}
