import WithDiscordEvoleraHighscoresKeywordPage, { generateMetadata } from './with-discord-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraHighscoresKeywordPage />;
}
