import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-discord-server');
}

export default function Tibia12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-discord-server" />;
}
