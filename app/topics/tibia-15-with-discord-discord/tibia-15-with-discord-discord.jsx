import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-discord');
}

export default function Tibia15WithDiscordDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-discord" />;
}
