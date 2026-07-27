import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-client');
}

export default function WithDiscordTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-client" />;
}
