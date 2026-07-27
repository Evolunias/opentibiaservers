import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-discord-server-chile');
}

export default function ClassicusWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-discord-server-chile" />;
}
