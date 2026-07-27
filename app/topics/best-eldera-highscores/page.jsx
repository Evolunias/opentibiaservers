import BestElderaHighscoresKeywordPage, { generateMetadata } from './best-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaHighscoresKeywordPage />;
}
