import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-with-discord-server');
}

export default function Tibiame81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-with-discord-server" />;
}
