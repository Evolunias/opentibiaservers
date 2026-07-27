import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-discord-open-tibia-server');
}

export default function Tibia80WithDiscordOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-discord-open-tibia-server" />;
}
