import NewSeasonOlderaHighscoresKeywordPage, { generateMetadata } from './new-season-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaHighscoresKeywordPage />;
}
