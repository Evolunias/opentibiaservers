import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-discord-server-argentina');
}

export default function AmeriaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-discord-server-argentina" />;
}
