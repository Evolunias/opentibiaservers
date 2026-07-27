import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-forum');
}

export default function WithDiscordCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-forum" />;
}
