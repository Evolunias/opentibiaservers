import NewSeasonMediviaHighscoresKeywordPage, { generateMetadata } from './new-season-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaHighscoresKeywordPage />;
}
