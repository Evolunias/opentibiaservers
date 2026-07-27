import WithDiscordHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './with-discord-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordHarmoniaOtHighscoresKeywordPage />;
}
