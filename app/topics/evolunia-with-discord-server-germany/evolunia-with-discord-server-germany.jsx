import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-discord-server-germany');
}

export default function EvoluniaWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-discord-server-germany" />;
}
