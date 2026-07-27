import BestTibiascapeHighscoresKeywordPage, { generateMetadata } from './best-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeHighscoresKeywordPage />;
}
