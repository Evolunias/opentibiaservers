import NewSeasonOxygenotHighscoresKeywordPage, { generateMetadata } from './new-season-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotHighscoresKeywordPage />;
}
