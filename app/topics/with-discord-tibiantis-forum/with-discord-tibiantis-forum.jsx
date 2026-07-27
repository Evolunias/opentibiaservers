import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-forum');
}

export default function WithDiscordTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-forum" />;
}
