import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-discord-discord');
}

export default function Tibia80WithDiscordDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-discord-discord" />;
}
