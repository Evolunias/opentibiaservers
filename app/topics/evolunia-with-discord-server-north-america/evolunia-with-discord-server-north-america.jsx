import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-discord-server-north-america');
}

export default function EvoluniaWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-discord-server-north-america" />;
}
