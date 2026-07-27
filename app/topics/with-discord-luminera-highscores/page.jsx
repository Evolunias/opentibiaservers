import WithDiscordLumineraHighscoresKeywordPage, { generateMetadata } from './with-discord-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraHighscoresKeywordPage />;
}
