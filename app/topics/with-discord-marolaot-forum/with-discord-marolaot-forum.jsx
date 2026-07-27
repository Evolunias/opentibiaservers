import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-forum');
}

export default function WithDiscordMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-forum" />;
}
