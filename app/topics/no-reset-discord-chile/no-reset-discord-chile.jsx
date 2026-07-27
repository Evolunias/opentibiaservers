import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-chile');
}

export default function NoResetDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-chile" />;
}
