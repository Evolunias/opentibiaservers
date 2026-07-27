import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-open-tibia');
}

export default function WithDiscordTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-open-tibia" />;
}
