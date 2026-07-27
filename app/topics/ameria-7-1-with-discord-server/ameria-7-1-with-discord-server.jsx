import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-with-discord-server');
}

export default function Ameria71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-with-discord-server" />;
}
