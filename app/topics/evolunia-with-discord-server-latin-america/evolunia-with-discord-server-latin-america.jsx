import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-discord-server-latin-america');
}

export default function EvoluniaWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-discord-server-latin-america" />;
}
