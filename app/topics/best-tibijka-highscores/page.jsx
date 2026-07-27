import BestTibijkaHighscoresKeywordPage, { generateMetadata } from './best-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaHighscoresKeywordPage />;
}
