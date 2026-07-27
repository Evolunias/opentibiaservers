import NewSeasonTibiameHighscoresKeywordPage, { generateMetadata } from './new-season-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameHighscoresKeywordPage />;
}
