import BestRealestaHighscoresKeywordPage, { generateMetadata } from './best-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaHighscoresKeywordPage />;
}
