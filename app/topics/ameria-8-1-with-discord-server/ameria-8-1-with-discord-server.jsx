import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-with-discord-server');
}

export default function Ameria81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-with-discord-server" />;
}
