import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-forum');
}

export default function WithDiscordClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-forum" />;
}
