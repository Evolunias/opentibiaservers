import WithDiscordKasteriaHighscoresKeywordPage, { generateMetadata } from './with-discord-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaHighscoresKeywordPage />;
}
