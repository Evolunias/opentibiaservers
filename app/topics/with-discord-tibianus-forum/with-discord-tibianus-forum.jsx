import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-forum');
}

export default function WithDiscordTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-forum" />;
}
