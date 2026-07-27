import WithDiscordOxygenotHighscoresKeywordPage, { generateMetadata } from './with-discord-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOxygenotHighscoresKeywordPage />;
}
