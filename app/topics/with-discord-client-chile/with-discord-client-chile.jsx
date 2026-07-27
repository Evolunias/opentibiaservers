import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-chile');
}

export default function WithDiscordClientChileKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-chile" />;
}
