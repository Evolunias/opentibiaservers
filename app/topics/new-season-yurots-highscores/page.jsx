import NewSeasonYurotsHighscoresKeywordPage, { generateMetadata } from './new-season-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsHighscoresKeywordPage />;
}
