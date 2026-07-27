import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-discord-server-uk');
}

export default function AmeriaWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-discord-server-uk" />;
}
