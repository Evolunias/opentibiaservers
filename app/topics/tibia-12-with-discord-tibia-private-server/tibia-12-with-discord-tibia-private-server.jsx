import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-discord-tibia-private-server');
}

export default function Tibia12WithDiscordTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-discord-tibia-private-server" />;
}
