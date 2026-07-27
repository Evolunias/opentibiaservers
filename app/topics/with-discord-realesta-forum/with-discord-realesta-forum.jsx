import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-forum');
}

export default function WithDiscordRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-forum" />;
}
