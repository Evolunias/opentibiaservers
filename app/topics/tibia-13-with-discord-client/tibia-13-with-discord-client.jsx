import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-discord-client');
}

export default function Tibia13WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-discord-client" />;
}
