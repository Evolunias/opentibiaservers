import LowrateTibiameHighscoresKeywordPage, { generateMetadata } from './lowrate-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameHighscoresKeywordPage />;
}
