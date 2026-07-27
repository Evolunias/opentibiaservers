import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-forum');
}

export default function WithDiscordOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-forum" />;
}
