import WithDiscordNostaltherHighscoresKeywordPage, { generateMetadata } from './with-discord-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNostaltherHighscoresKeywordPage />;
}
