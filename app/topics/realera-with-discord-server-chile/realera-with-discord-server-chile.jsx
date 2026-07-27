import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-chile');
}

export default function RealeraWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-chile" />;
}
