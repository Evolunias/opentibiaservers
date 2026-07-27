import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-discord-open-tibia-server');
}

export default function Tibia71WithDiscordOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-discord-open-tibia-server" />;
}
