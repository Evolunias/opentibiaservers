import NewTibiameHighscoresKeywordPage, { generateMetadata } from './new-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameHighscoresKeywordPage />;
}
