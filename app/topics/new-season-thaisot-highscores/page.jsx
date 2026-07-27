import NewSeasonThaisotHighscoresKeywordPage, { generateMetadata } from './new-season-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotHighscoresKeywordPage />;
}
