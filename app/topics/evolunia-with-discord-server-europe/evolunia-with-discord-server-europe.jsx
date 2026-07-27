import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-discord-server-europe');
}

export default function EvoluniaWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-discord-server-europe" />;
}
