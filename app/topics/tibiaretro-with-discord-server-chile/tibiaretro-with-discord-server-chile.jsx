import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-chile');
}

export default function TibiaretroWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-chile" />;
}
