import NewSeasonArchlightHighscoresKeywordPage, { generateMetadata } from './new-season-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightHighscoresKeywordPage />;
}
