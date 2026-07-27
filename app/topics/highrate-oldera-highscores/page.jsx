import HighrateOlderaHighscoresKeywordPage, { generateMetadata } from './highrate-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaHighscoresKeywordPage />;
}
