import BestTibiaraHighscoresKeywordPage, { generateMetadata } from './best-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraHighscoresKeywordPage />;
}
