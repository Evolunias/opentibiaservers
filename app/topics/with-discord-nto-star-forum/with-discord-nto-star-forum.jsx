import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-forum');
}

export default function WithDiscordNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-forum" />;
}
