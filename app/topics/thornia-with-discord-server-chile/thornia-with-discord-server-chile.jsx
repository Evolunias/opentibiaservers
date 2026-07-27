import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-chile');
}

export default function ThorniaWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-chile" />;
}
