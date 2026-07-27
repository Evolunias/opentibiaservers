import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-chile');
}

export default function OlderaWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-chile" />;
}
