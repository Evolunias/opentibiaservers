import LowrateInfernalOtHighscoresKeywordPage, { generateMetadata } from './lowrate-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateInfernalOtHighscoresKeywordPage />;
}
