import NewSeasonRealeraHighscoresKeywordPage, { generateMetadata } from './new-season-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraHighscoresKeywordPage />;
}
