import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-discord-server-sweden');
}

export default function AmeriaWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-discord-server-sweden" />;
}
