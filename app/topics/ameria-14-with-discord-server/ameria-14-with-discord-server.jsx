import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-with-discord-server');
}

export default function Ameria14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-with-discord-server" />;
}
