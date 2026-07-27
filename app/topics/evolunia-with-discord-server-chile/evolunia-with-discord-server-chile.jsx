import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-discord-server-chile');
}

export default function EvoluniaWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-discord-server-chile" />;
}
