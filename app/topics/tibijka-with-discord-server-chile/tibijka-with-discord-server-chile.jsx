import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-chile');
}

export default function TibijkaWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-chile" />;
}
