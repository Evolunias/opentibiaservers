import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-discord-server');
}

export default function Tibia84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-discord-server" />;
}
