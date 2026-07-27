import WithDiscordOtmadnessHighscoresKeywordPage, { generateMetadata } from './with-discord-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessHighscoresKeywordPage />;
}
