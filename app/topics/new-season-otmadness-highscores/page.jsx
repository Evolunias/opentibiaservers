import NewSeasonOtmadnessHighscoresKeywordPage, { generateMetadata } from './new-season-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessHighscoresKeywordPage />;
}
