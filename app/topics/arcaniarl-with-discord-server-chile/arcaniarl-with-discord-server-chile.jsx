import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-discord-server-chile');
}

export default function ArcaniarlWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-discord-server-chile" />;
}
