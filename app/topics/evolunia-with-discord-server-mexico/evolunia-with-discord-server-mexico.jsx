import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-discord-server-mexico');
}

export default function EvoluniaWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-discord-server-mexico" />;
}
