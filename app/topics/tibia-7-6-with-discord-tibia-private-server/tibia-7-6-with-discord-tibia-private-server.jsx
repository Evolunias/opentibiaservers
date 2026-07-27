import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-discord-tibia-private-server');
}

export default function Tibia76WithDiscordTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-discord-tibia-private-server" />;
}
