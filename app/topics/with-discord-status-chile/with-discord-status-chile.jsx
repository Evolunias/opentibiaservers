import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-chile');
}

export default function WithDiscordStatusChileKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-chile" />;
}
