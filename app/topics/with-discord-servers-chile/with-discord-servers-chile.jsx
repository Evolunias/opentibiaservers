import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-chile');
}

export default function WithDiscordServersChileKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-chile" />;
}
