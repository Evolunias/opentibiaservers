import HighrateOxygenotHighscoresKeywordPage, { generateMetadata } from './highrate-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotHighscoresKeywordPage />;
}
