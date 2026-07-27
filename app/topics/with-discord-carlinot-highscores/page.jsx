import WithDiscordCarlinotHighscoresKeywordPage, { generateMetadata } from './with-discord-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotHighscoresKeywordPage />;
}
