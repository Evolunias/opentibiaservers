import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-guilds');
}

export default function MarolaotGuildsKeywordPage() {
  return <StaticKeywordPage slug="marolaot-guilds" />;
}
