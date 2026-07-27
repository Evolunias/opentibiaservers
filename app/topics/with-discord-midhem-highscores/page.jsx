import WithDiscordMidhemHighscoresKeywordPage, { generateMetadata } from './with-discord-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemHighscoresKeywordPage />;
}
