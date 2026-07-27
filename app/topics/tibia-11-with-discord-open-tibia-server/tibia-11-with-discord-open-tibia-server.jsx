import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-open-tibia-server');
}

export default function Tibia11WithDiscordOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-open-tibia-server" />;
}
