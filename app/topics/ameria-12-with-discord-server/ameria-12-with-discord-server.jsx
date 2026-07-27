import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-with-discord-server');
}

export default function Ameria12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-with-discord-server" />;
}
