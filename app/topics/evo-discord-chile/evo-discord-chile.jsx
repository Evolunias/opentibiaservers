import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-chile');
}

export default function EvoDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-chile" />;
}
