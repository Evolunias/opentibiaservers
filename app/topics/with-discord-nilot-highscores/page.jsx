import WithDiscordNilotHighscoresKeywordPage, { generateMetadata } from './with-discord-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotHighscoresKeywordPage />;
}
