import HighrateRealeraHighscoresKeywordPage, { generateMetadata } from './highrate-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraHighscoresKeywordPage />;
}
