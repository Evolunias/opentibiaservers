import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-chile');
}

export default function LowExpDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-chile" />;
}
