import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-with-discord-server');
}

export default function Ameria74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-with-discord-server" />;
}
