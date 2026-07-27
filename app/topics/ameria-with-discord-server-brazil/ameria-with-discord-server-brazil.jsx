import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-discord-server-brazil');
}

export default function AmeriaWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-discord-server-brazil" />;
}
