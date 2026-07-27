import BestOtmadnessHighscoresKeywordPage, { generateMetadata } from './best-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessHighscoresKeywordPage />;
}
