import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-discord-tibia-private-server');
}

export default function Tibia14WithDiscordTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-discord-tibia-private-server" />;
}
