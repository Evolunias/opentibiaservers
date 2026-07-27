import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-discord-server-argentina');
}

export default function EvoluniaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-discord-server-argentina" />;
}
