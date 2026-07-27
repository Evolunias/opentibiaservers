import HighrateCarlinotHighscoresKeywordPage, { generateMetadata } from './highrate-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotHighscoresKeywordPage />;
}
