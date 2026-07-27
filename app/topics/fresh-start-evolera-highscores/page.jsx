import FreshStartEvoleraHighscoresKeywordPage, { generateMetadata } from './fresh-start-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoleraHighscoresKeywordPage />;
}
