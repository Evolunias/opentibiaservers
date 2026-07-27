import BestKasteriaHighscoresKeywordPage, { generateMetadata } from './best-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaHighscoresKeywordPage />;
}
