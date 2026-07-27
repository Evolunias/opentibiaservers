import BestThaisotHighscoresKeywordPage, { generateMetadata } from './best-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotHighscoresKeywordPage />;
}
