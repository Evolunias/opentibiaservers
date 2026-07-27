import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-discord-discord');
}

export default function Tibia100WithDiscordDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-discord-discord" />;
}
