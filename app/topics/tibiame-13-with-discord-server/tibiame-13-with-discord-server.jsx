import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-with-discord-server');
}

export default function Tibiame13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-with-discord-server" />;
}
