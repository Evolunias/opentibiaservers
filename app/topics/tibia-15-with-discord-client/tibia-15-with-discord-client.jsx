import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-client');
}

export default function Tibia15WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-client" />;
}
