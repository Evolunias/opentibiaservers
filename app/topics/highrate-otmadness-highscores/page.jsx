import HighrateOtmadnessHighscoresKeywordPage, { generateMetadata } from './highrate-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessHighscoresKeywordPage />;
}
