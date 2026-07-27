import NewOtmadnessHighscoresKeywordPage, { generateMetadata } from './new-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessHighscoresKeywordPage />;
}
