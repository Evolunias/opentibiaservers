import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-discord-server-europe');
}

export default function AmeriaWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-discord-server-europe" />;
}
