import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-with-discord-server');
}

export default function Ameria13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-with-discord-server" />;
}
