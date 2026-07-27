import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-online');
}

export default function WithDiscordTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-online" />;
}
