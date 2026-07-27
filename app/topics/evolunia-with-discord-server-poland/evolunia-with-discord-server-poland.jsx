import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-discord-server-poland');
}

export default function EvoluniaWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-discord-server-poland" />;
}
