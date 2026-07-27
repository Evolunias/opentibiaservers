import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-discord-client');
}

export default function Tibia84WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-discord-client" />;
}
