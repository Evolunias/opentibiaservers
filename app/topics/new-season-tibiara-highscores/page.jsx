import NewSeasonTibiaraHighscoresKeywordPage, { generateMetadata } from './new-season-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraHighscoresKeywordPage />;
}
