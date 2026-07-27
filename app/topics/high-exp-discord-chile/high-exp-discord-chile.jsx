import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-chile');
}

export default function HighExpDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-chile" />;
}
