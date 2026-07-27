import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-discord-open-tibia-server');
}

export default function Tibia13WithDiscordOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-discord-open-tibia-server" />;
}
