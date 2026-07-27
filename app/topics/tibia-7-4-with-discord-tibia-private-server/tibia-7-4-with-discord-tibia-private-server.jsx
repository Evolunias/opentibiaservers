import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-discord-tibia-private-server');
}

export default function Tibia74WithDiscordTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-discord-tibia-private-server" />;
}
