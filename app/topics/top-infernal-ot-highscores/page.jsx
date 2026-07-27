import TopInfernalOtHighscoresKeywordPage, { generateMetadata } from './top-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopInfernalOtHighscoresKeywordPage />;
}
