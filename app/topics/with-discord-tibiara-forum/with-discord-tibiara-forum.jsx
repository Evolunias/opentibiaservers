import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-forum');
}

export default function WithDiscordTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-forum" />;
}
