import WithDiscordCanobHighscoresKeywordPage, { generateMetadata } from './with-discord-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobHighscoresKeywordPage />;
}
