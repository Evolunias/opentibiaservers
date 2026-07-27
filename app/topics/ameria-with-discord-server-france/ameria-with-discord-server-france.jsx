import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-discord-server-france');
}

export default function AmeriaWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-discord-server-france" />;
}
