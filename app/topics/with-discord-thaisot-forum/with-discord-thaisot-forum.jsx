import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-forum');
}

export default function WithDiscordThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-forum" />;
}
