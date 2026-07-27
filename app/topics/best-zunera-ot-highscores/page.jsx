import BestZuneraOtHighscoresKeywordPage, { generateMetadata } from './best-zunera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZuneraOtHighscoresKeywordPage />;
}
