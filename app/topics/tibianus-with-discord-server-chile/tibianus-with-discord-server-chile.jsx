import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-chile');
}

export default function TibianusWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-chile" />;
}
