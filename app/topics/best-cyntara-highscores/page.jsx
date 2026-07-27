import BestCyntaraHighscoresKeywordPage, { generateMetadata } from './best-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraHighscoresKeywordPage />;
}
