import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-private-server');
}

export default function WithDiscordTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-private-server" />;
}
