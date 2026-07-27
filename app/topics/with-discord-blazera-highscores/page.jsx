import WithDiscordBlazeraHighscoresKeywordPage, { generateMetadata } from './with-discord-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraHighscoresKeywordPage />;
}
