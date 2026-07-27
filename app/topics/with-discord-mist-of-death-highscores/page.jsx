import WithDiscordMistOfDeathHighscoresKeywordPage, { generateMetadata } from './with-discord-mist-of-death-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMistOfDeathHighscoresKeywordPage />;
}
