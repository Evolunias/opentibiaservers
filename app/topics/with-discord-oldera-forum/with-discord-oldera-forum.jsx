import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-forum');
}

export default function WithDiscordOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-forum" />;
}
