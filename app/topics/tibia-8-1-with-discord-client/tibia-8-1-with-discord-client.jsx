import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-discord-client');
}

export default function Tibia81WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-discord-client" />;
}
