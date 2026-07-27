import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-france');
}

export default function WithDiscordForumFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-france" />;
}
