import NewSeasonCalmeraOtHighscoresKeywordPage, { generateMetadata } from './new-season-calmera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCalmeraOtHighscoresKeywordPage />;
}
