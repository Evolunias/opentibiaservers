import WithDiscordImperianicHighscoresKeywordPage, { generateMetadata } from './with-discord-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordImperianicHighscoresKeywordPage />;
}
