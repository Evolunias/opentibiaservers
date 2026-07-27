import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-discord-server-uk');
}

export default function EvoluniaWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-discord-server-uk" />;
}
