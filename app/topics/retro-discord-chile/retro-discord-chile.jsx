import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-chile');
}

export default function RetroDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-chile" />;
}
