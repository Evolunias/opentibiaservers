import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-with-discord-server');
}

export default function Ameria84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-with-discord-server" />;
}
