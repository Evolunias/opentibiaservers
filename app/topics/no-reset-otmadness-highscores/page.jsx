import NoResetOtmadnessHighscoresKeywordPage, { generateMetadata } from './no-reset-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessHighscoresKeywordPage />;
}
