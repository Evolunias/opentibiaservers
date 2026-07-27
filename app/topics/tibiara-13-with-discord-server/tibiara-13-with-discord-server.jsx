import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-with-discord-server');
}

export default function Tibiara13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-with-discord-server" />;
}
