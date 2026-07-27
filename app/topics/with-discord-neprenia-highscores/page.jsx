import WithDiscordNepreniaHighscoresKeywordPage, { generateMetadata } from './with-discord-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaHighscoresKeywordPage />;
}
