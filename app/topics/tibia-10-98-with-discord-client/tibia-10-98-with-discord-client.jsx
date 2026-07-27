import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-discord-client');
}

export default function Tibia1098WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-discord-client" />;
}
