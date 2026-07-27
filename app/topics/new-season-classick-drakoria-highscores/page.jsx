import NewSeasonClassickDrakoriaHighscoresKeywordPage, { generateMetadata } from './new-season-classick-drakoria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassickDrakoriaHighscoresKeywordPage />;
}
