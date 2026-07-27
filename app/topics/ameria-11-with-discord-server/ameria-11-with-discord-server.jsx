import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-with-discord-server');
}

export default function Ameria11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-with-discord-server" />;
}
