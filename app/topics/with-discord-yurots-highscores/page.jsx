import WithDiscordYurotsHighscoresKeywordPage, { generateMetadata } from './with-discord-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsHighscoresKeywordPage />;
}
