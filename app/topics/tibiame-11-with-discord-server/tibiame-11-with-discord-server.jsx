import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-with-discord-server');
}

export default function Tibiame11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-with-discord-server" />;
}
