import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-forum');
}

export default function WithDiscordNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-forum" />;
}
