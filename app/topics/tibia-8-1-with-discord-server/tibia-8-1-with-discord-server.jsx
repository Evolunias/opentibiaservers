import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-discord-server');
}

export default function Tibia81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-discord-server" />;
}
