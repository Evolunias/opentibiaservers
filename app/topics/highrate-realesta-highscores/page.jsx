import HighrateRealestaHighscoresKeywordPage, { generateMetadata } from './highrate-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaHighscoresKeywordPage />;
}
