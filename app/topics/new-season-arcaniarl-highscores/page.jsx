import NewSeasonArcaniarlHighscoresKeywordPage, { generateMetadata } from './new-season-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlHighscoresKeywordPage />;
}
