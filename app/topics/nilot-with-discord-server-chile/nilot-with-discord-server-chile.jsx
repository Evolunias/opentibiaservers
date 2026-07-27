import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-chile');
}

export default function NilotWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-chile" />;
}
