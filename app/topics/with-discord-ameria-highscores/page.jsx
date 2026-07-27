import WithDiscordAmeriaHighscoresKeywordPage, { generateMetadata } from './with-discord-ameria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaHighscoresKeywordPage />;
}
