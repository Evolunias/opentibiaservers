import BestMadnessaliveHighscoresKeywordPage, { generateMetadata } from './best-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMadnessaliveHighscoresKeywordPage />;
}
