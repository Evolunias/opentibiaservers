import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-chile');
}

export default function TibiameWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-chile" />;
}
