import NewInfernalOtHighscoresKeywordPage, { generateMetadata } from './new-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewInfernalOtHighscoresKeywordPage />;
}
