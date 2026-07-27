import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-discord-tibia-private-server');
}

export default function Tibia96WithDiscordTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-discord-tibia-private-server" />;
}
