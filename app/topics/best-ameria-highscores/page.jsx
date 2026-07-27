import BestAmeriaHighscoresKeywordPage, { generateMetadata } from './best-ameria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaHighscoresKeywordPage />;
}
