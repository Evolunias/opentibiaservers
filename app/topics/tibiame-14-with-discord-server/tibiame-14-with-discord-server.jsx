import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-with-discord-server');
}

export default function Tibiame14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-with-discord-server" />;
}
