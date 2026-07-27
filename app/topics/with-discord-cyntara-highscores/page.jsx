import WithDiscordCyntaraHighscoresKeywordPage, { generateMetadata } from './with-discord-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraHighscoresKeywordPage />;
}
