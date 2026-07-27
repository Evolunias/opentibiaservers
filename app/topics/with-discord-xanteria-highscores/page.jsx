import WithDiscordXanteriaHighscoresKeywordPage, { generateMetadata } from './with-discord-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaHighscoresKeywordPage />;
}
