import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-discord-server');
}

export default function Tibia13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-discord-server" />;
}
