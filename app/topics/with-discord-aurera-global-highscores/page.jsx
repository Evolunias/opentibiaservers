import WithDiscordAureraGlobalHighscoresKeywordPage, { generateMetadata } from './with-discord-aurera-global-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAureraGlobalHighscoresKeywordPage />;
}
