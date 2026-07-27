import TopOtmadnessHighscoresKeywordPage, { generateMetadata } from './top-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessHighscoresKeywordPage />;
}
