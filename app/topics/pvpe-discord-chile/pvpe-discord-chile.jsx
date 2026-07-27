import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-chile');
}

export default function PvpeDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-chile" />;
}
