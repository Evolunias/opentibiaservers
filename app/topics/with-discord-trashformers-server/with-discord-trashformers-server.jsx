import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-server');
}

export default function WithDiscordTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-server" />;
}
