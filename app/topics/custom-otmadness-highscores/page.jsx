import CustomOtmadnessHighscoresKeywordPage, { generateMetadata } from './custom-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessHighscoresKeywordPage />;
}
