import WithDiscordCalmeraOtHighscoresKeywordPage, { generateMetadata } from './with-discord-calmera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCalmeraOtHighscoresKeywordPage />;
}
