import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-with-discord-server');
}

export default function Ameria15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-with-discord-server" />;
}
