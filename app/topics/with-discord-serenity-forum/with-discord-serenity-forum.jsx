import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-forum');
}

export default function WithDiscordSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-forum" />;
}
