import NewSeasonInfernalOtHighscoresKeywordPage, { generateMetadata } from './new-season-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonInfernalOtHighscoresKeywordPage />;
}
