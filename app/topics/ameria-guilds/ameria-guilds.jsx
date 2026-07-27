import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-guilds');
}

export default function AmeriaGuildsKeywordPage() {
  return <StaticKeywordPage slug="ameria-guilds" />;
}
