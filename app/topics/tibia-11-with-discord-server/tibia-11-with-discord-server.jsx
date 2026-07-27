import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-server');
}

export default function Tibia11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-server" />;
}
