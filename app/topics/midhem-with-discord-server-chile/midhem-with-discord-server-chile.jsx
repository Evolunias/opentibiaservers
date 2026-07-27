import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-chile');
}

export default function MidhemWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-chile" />;
}
