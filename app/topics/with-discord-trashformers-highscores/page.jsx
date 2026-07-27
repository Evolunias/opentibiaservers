import WithDiscordTrashformersHighscoresKeywordPage, { generateMetadata } from './with-discord-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTrashformersHighscoresKeywordPage />;
}
