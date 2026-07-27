import HighrateYurotsHighscoresKeywordPage, { generateMetadata } from './highrate-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsHighscoresKeywordPage />;
}
