import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-chile');
}

export default function ArchlightWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-chile" />;
}
