import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-chile');
}

export default function RubinotWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-chile" />;
}
