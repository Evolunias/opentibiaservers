import BestEvoleraHighscoresKeywordPage, { generateMetadata } from './best-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraHighscoresKeywordPage />;
}
