import WithDiscordRealeraHighscoresKeywordPage, { generateMetadata } from './with-discord-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraHighscoresKeywordPage />;
}
