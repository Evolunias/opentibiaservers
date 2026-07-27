import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-forum');
}

export default function WithDiscordRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-forum" />;
}
