import FreshStartOtmadnessHighscoresKeywordPage, { generateMetadata } from './fresh-start-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOtmadnessHighscoresKeywordPage />;
}
