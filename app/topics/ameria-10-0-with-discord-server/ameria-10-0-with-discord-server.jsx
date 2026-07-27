import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-with-discord-server');
}

export default function Ameria100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-with-discord-server" />;
}
