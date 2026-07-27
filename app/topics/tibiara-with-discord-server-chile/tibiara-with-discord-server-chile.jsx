import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-chile');
}

export default function TibiaraWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-chile" />;
}
