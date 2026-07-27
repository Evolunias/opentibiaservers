import WithDiscordAlasteraHighscoresKeywordPage, { generateMetadata } from './with-discord-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraHighscoresKeywordPage />;
}
