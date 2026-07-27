import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-forum');
}

export default function WithDiscordArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-forum" />;
}
