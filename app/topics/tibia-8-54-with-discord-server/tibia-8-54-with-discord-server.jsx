import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-discord-server');
}

export default function Tibia854WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-discord-server" />;
}
