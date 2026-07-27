import WithDiscordCoxaotHighscoresKeywordPage, { generateMetadata } from './with-discord-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotHighscoresKeywordPage />;
}
