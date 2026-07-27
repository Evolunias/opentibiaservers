import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-forum');
}

export default function WithDiscordAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-forum" />;
}
