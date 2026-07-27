import FreshStartOlderaHighscoresKeywordPage, { generateMetadata } from './fresh-start-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaHighscoresKeywordPage />;
}
