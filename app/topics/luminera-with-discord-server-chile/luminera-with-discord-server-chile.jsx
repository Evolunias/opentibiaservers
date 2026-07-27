import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-chile');
}

export default function LumineraWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-chile" />;
}
