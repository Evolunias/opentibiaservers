import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-discord-server');
}

export default function Tibia96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-discord-server" />;
}
