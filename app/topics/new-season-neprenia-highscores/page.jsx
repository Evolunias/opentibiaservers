import NewSeasonNepreniaHighscoresKeywordPage, { generateMetadata } from './new-season-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaHighscoresKeywordPage />;
}
