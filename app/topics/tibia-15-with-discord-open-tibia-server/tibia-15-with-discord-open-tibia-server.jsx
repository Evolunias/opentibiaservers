import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-open-tibia-server');
}

export default function Tibia15WithDiscordOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-open-tibia-server" />;
}
