import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-forum');
}

export default function WithDiscordYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-forum" />;
}
