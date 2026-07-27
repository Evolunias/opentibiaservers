import WithDiscordTibiaraHighscoresKeywordPage, { generateMetadata } from './with-discord-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraHighscoresKeywordPage />;
}
