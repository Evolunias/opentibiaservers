import NewSeasonCarlinotHighscoresKeywordPage, { generateMetadata } from './new-season-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotHighscoresKeywordPage />;
}
