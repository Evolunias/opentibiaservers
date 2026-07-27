import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-discord-server-chile');
}

export default function NepreniaWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-discord-server-chile" />;
}
