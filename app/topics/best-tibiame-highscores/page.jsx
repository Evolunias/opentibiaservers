import BestTibiameHighscoresKeywordPage, { generateMetadata } from './best-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameHighscoresKeywordPage />;
}
