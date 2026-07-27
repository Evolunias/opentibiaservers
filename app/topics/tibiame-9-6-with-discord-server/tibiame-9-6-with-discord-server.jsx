import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-with-discord-server');
}

export default function Tibiame96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-with-discord-server" />;
}
