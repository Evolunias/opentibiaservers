import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-discord-client');
}

export default function Tibia772WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-discord-client" />;
}
