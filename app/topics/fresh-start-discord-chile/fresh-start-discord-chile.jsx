import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-chile');
}

export default function FreshStartDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-chile" />;
}
