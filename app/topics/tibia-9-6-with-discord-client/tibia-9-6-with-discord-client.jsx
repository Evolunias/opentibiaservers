import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-discord-client');
}

export default function Tibia96WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-discord-client" />;
}
