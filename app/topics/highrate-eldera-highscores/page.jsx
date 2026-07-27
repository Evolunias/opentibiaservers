import HighrateElderaHighscoresKeywordPage, { generateMetadata } from './highrate-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaHighscoresKeywordPage />;
}
