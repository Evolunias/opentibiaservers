import BestCalmeraOtHighscoresKeywordPage, { generateMetadata } from './best-calmera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCalmeraOtHighscoresKeywordPage />;
}
