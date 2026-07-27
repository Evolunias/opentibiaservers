import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-with-discord-server');
}

export default function Ameria86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-with-discord-server" />;
}
