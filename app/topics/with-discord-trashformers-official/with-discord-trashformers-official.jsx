import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-official');
}

export default function WithDiscordTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-official" />;
}
