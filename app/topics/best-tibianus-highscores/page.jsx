import BestTibianusHighscoresKeywordPage, { generateMetadata } from './best-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusHighscoresKeywordPage />;
}
