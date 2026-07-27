import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-chile');
}

export default function NonPvpDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-chile" />;
}
