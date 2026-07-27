import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-discord');
}

export default function WithDiscordTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-discord" />;
}
