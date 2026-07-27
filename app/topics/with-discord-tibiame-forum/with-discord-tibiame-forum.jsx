import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-forum');
}

export default function WithDiscordTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-forum" />;
}
