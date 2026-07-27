import BestInfernalOtHighscoresKeywordPage, { generateMetadata } from './best-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestInfernalOtHighscoresKeywordPage />;
}
