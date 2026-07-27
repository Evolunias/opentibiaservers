import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-with-discord-server');
}

export default function Ameria76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-with-discord-server" />;
}
