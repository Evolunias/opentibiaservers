import WithDiscordMediviaHighscoresKeywordPage, { generateMetadata } from './with-discord-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaHighscoresKeywordPage />;
}
