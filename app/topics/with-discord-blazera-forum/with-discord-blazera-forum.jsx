import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-forum');
}

export default function WithDiscordBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-forum" />;
}
