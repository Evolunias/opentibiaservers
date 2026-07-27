import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-discord-server');
}

export default function Tibia14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-discord-server" />;
}
