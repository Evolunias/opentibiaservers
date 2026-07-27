import BestCoxaotHighscoresKeywordPage, { generateMetadata } from './best-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotHighscoresKeywordPage />;
}
