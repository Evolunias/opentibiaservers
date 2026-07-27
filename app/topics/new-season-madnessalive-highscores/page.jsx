import NewSeasonMadnessaliveHighscoresKeywordPage, { generateMetadata } from './new-season-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMadnessaliveHighscoresKeywordPage />;
}
