import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-tibia-private-server');
}

export default function Tibia15WithDiscordTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-tibia-private-server" />;
}
