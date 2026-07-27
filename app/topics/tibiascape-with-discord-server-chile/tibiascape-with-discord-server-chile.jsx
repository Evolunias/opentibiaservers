import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-chile');
}

export default function TibiascapeWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-chile" />;
}
