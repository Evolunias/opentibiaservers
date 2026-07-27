import NewSeasonHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './new-season-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonHarmoniaOtHighscoresKeywordPage />;
}
