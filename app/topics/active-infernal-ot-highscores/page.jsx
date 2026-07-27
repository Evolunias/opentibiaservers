import ActiveInfernalOtHighscoresKeywordPage, { generateMetadata } from './active-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveInfernalOtHighscoresKeywordPage />;
}
