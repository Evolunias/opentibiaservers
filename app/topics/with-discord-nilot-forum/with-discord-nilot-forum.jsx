import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-forum');
}

export default function WithDiscordNilotForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-forum" />;
}
