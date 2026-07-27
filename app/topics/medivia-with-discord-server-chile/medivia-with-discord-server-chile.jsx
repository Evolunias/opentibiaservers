import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-chile');
}

export default function MediviaWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-chile" />;
}
