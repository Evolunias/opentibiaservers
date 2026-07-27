import NewSeasonNtoStarHighscoresKeywordPage, { generateMetadata } from './new-season-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNtoStarHighscoresKeywordPage />;
}
