import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-discord-client');
}

export default function Tibia14WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-discord-client" />;
}
