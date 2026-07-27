import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-login');
}

export default function WithDiscordTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-login" />;
}
