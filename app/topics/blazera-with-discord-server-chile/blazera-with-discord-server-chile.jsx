import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-chile');
}

export default function BlazeraWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-chile" />;
}
