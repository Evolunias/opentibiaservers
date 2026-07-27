import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-1-with-discord-server');
}

export default function Tibiame71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-1-with-discord-server" />;
}
