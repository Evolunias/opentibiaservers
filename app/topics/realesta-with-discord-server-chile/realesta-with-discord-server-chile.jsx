import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-discord-server-chile');
}

export default function RealestaWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-discord-server-chile" />;
}
