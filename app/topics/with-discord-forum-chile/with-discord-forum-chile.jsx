import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-chile');
}

export default function WithDiscordForumChileKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-chile" />;
}
