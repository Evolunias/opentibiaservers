import BestTibiantisHighscoresKeywordPage, { generateMetadata } from './best-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisHighscoresKeywordPage />;
}
