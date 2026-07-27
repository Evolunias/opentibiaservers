import HighrateTibiameHighscoresKeywordPage, { generateMetadata } from './highrate-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameHighscoresKeywordPage />;
}
