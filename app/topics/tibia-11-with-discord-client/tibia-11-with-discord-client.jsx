import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-client');
}

export default function Tibia11WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-client" />;
}
