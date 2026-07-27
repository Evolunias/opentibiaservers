import WithDiscordRealestaHighscoresKeywordPage, { generateMetadata } from './with-discord-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaHighscoresKeywordPage />;
}
