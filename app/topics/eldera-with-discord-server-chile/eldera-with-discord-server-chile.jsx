import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-chile');
}

export default function ElderaWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-chile" />;
}
