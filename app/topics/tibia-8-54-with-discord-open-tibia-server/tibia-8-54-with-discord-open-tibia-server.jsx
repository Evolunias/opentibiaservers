import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-discord-open-tibia-server');
}

export default function Tibia854WithDiscordOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-discord-open-tibia-server" />;
}
