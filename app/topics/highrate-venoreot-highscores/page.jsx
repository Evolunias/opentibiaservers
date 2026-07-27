import HighrateVenoreotHighscoresKeywordPage, { generateMetadata } from './highrate-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotHighscoresKeywordPage />;
}
