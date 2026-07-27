import FreshStartElderaHighscoresKeywordPage, { generateMetadata } from './fresh-start-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaHighscoresKeywordPage />;
}
