import WithDiscordUnlineHighscoresKeywordPage, { generateMetadata } from './with-discord-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineHighscoresKeywordPage />;
}
