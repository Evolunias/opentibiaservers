import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-discord-server-north-america');
}

export default function AmeriaWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-discord-server-north-america" />;
}
