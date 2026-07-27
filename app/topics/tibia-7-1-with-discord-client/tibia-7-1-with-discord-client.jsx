import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-discord-client');
}

export default function Tibia71WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-discord-client" />;
}
