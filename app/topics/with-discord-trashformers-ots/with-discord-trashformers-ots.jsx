import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-ots');
}

export default function WithDiscordTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-ots" />;
}
