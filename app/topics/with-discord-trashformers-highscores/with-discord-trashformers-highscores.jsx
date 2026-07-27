import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-highscores');
}

export default function WithDiscordTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-highscores" />;
}
