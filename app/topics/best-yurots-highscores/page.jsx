import BestYurotsHighscoresKeywordPage, { generateMetadata } from './best-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsHighscoresKeywordPage />;
}
