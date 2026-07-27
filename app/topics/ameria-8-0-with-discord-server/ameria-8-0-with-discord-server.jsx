import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-with-discord-server');
}

export default function Ameria80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-with-discord-server" />;
}
