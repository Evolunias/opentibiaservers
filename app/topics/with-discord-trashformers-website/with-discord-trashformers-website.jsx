import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-website');
}

export default function WithDiscordTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-website" />;
}
