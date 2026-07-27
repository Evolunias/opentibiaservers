import NewSeasonMistOfDeathHighscoresKeywordPage, { generateMetadata } from './new-season-mist-of-death-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMistOfDeathHighscoresKeywordPage />;
}
