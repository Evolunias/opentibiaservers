import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-discord-tibia-private-server');
}

export default function Tibia86WithDiscordTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-discord-tibia-private-server" />;
}
