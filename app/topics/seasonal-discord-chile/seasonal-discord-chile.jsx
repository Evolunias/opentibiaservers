import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-chile');
}

export default function SeasonalDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-chile" />;
}
